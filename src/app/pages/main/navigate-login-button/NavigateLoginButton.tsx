import { useNavigate } from 'react-router-dom';
import './NavigateLoginButton.css';

export const NavigateLoginButton = () => {
    const navigate = useNavigate();
  
    function changePage(){
        navigate('/login');
    };

    return (
        <button className="navigateLoginButton" onClick={changePage}>
            Acessar conta
        </button>
    );
}