import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './SucessButton.css';


export const SucessButton = () => {

    const navigate = useNavigate();

    function changePage(){
        navigate('/');
    };

    const SucessButton = styled(Button)<ButtonProps>(() => ({
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
            <SucessButton onClick={changePage} variant="outlined">Voltar para tela principal</SucessButton>
        </div>
    );
}