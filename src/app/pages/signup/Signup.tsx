import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupStyle.css';
import { Password } from './password/Password';
import { Username } from './username/Username';
import { RegisterButton } from './register-button/RegisterButton';
import { RegisterResponse } from '../../shared/types/RegisterResponse';
const Logo = require('../../shared/assets/images/black_logo.png');

export const Signup = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [errMessage, setErrMessage] = useState<RegisterResponse | null>(null); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function changePage(){
        navigate('/');
    };

    function handleUsername(username: string){
        setUsername(username)
    }

    function handlePassword(password: string){
        setPassword(password)
    }

    function handleFeedback(feedback: RegisterResponse){
        if(feedback.sucessMessage !== ''){
            navigate('/sucess');
        }
        else{
            setErr(true);
            setErrMessage(feedback);
        }
    }
    
    return (
        <div className="signupContent">
            <div className="signupHeader">
                <img className="logo" onClick={changePage} src={Logo} alt="NGCash logo" />
            </div>
            <div className="signupBody">
                <div className="signup">
                    <h1>Crie sua conta</h1>
                    <div className="inputs">
                        <Username handleUsername={handleUsername} err={err} errMessage={errMessage?.usernameMessage}/>
                        <Password handlePassword={handlePassword} err={err} errMessage={errMessage?.passwordMessage}/>
                        <RegisterButton username={username} password={password} handleFeedback={handleFeedback} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}