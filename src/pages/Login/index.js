import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Login() {
    return(
        <div className="container-login">
            <h1 id="title">Entrar</h1>

            <form className="container-form">
                <input type="email"
                    id="input-email"
                    placeholder="Digite seu e-mail"
                />
                <br></br>
                <input type="password"
                    id="input-password"
                    placeholder="Digite sua senha"
                />
                <br></br>
                <input type="submit" value="Entrar" className="login-submit"/>

                <Link to="/cadastro" className="link-cadastro">
                    Não se Cadastrou Ainda? Cadastre-se.
                </Link>
            </form>
        </div>
    );
}