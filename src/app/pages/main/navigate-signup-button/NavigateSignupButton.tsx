import { useNavigate } from 'react-router-dom';
import './NavigateSignupButton.css';

export const NavigateSignupButton = () => {
    const navigate = useNavigate();
  
    function changePage(){
        navigate('/signup');
    };

    return (
        <button className="navigateSignButton" onClick={changePage}>
            Criar conta
        </button>
    );
}