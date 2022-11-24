import { BadgeButtons } from './badge-buttons/BadgeButtons';
import { NavigateLoginButton } from './navigate-login-button/NavigateLoginButton';
import './MainStyle.css';
import { NavigateSignupButton } from './navigate-signup-button/NavigateSignupButton';
const Logo = require('../../shared/assets/images/black_logo.png');
const Phone = require('../../shared/assets/images/main_phone_img.png')

export const Main = () => {
    return (
        <div className='mainContent'>
            <div className='mainHeader'>
                <img src={Logo} alt="Main logo." />
                <div className="buttons">
                    <NavigateSignupButton/>
                    <NavigateLoginButton />
                </div>
            </div>
            <div className='mainBody'>
                <div className="mainContainer">
                    <div className="mainContent">
                        <h1>A CARTEIRA DA NOVA GERAÇÃO.</h1>
                        <h2>É para todas as idades!</h2>
                        <BadgeButtons />
                    </div>
                    <img src={Phone} alt="Main phone" />
                </div>
            </div>
        </div>
    )
}