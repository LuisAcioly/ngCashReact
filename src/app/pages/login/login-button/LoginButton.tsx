import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import './LoginButton.css';
import { AuthContext } from '../../../shared/contexts/Auth/AuthContext';

interface ILoginProps {
    username: string,
    password: string,
    handleFeedback: (arg: boolean) => void
}


export const LoginButton: React.FC<ILoginProps> = ({username, password, handleFeedback}) => {

    const auth = useContext(AuthContext);
    
    const [disableButton, setDisableButton ] = useState(true);

    useEffect(() => {
        if(username === '' || password === ''){
            setDisableButton(true);
        }
        else {
            setDisableButton(false);
        }
      }, [username, password]);

    async function onLogin(){
        const isLogged = await auth.login(username, password);
        handleFeedback(isLogged);
    }

    const LoginButton = styled(Button)<ButtonProps>(() => ({
        width: '100%',
        color: '#000',
        border: '3px solid',
        borderColor: '#000',
        backgroundColor: '#fff',
        alignSelf: 'center',
        '&:hover': {
            border: '2px solid',
            borderColor: '#000',
          backgroundColor: '#c9c9c9',
        },
      }));

    return(
        <div className="loginButton">
            <LoginButton onClick={onLogin} variant="outlined" disabled={disableButton}>Entrar</LoginButton>
        </div>
    );
}