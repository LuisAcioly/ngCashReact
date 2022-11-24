import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import './RegisterButton.css';
import { useApi } from '../../../shared/hooks/UseApi';
import { RegisterResponse } from '../../../shared/types/RegisterResponse';
import  MessageService  from '../../../shared/services/MessageService';

interface ISignupProps {
    username: string,
    password: string,
    handleFeedback: (arg: RegisterResponse) => void
}


export const RegisterButton: React.FC<ISignupProps> = ({username, password, handleFeedback}) => {

    const api = useApi();
    const messageService = MessageService;
    
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
        const response = await api.signup(username, password);
        const feedback = messageService.filterResponse(response);

        handleFeedback(feedback);
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
        <div className="registerButton">
            <LoginButton onClick={onLogin} variant="outlined" disabled={disableButton}>CADASTRAR</LoginButton>
        </div>
    );
}