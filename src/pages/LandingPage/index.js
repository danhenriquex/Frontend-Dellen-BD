import React from 'react';
import { Link } from 'react-router-dom';
 
import LogoImg from '../../assets/images/logo1.svg';
import LogoCalcado from '../../assets/images/logo.svg';
import LoginIcon from '../../assets/images/login-icon.svg';
import PencilIcon from '../../assets/images/edit.svg';


import './styles.css';

export default function LandingPage() {
    return (
        <div id="page-landing">
            <div id="landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="D'Ellen" className="logo-main"/>
                </div>

                <img src={LogoCalcado} alt="Logo da Loja" className="logo-img"/>

                <div className="button-container">
                    <Link to="/login" className="login">
                        <img src={LoginIcon} alt="Login" width="16" height="16" className="login-icon"/>
                        Entrar
                    </Link>

                    <Link to="/cadastro" className="cadastro">
                        <img src={PencilIcon} alt="Cadastro" width="16" height="16" className="register-icon"/>
                        Cadastro
                    </Link>
                </div>
            </div>
        </div>
    );
}