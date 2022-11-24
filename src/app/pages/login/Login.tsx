import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Feedback } from './feedback/Feedback';
import { LoginButton } from './login-button/LoginButton';
import './LoginStyle.css';
import { Password } from './password/Password';
import { Username } from './username/Username';
const Logo = require('../../shared/assets/images/black_logo.png');

export const Login = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
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

    function handleFeedback(feedback: boolean){
        if(feedback){
            navigate('/dashboard/my-account')
        }
        setErr(true);
    }
    
    return (
        <div className="loginContent">
            <div className="loginHeader">
                <img className="logo" onClick={changePage} src={Logo} alt="NGCash logo" />
            </div>
            <div className="loginBody">
                <div className="login">
                    <h1>Faça seu login</h1>
                    <div className="inputs">
                        <Feedback showMessage={err} />
                        <Username handleUsername={handleUsername} err={err}/>
                        <Password handlePassword={handlePassword} err={err}/>
                        <LoginButton username={username} password={password} handleFeedback={handleFeedback} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}