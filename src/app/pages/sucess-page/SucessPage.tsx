import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { SucessButton } from "./sucess-button/SucessButton";
import './SucessStyle.css';
const Logo = require('../../shared/assets/images/black_logo.png');

export const SucessPage = () => {
    const navigate = useNavigate();

    function changePage(){
        navigate('/');
    };

    return (
        <div className="sucessContent">
            <div className="sucessHeader">
                <img className="logo" onClick={changePage} src={Logo} alt="NGCash logo" />
            </div>
            <div className="sucessBody">
                <div className="sucess">
                    <Icon/>
                    <h1>Cadastro realizado com sucesso!</h1>
                    <div className="button">
                        <SucessButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}