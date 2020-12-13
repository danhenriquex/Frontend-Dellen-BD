import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Login() {

    const [ formData, setData ] = useState({
        "email": '',
        "password": ""
    })


    const history = useHistory();

    function handleInput(e){
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        setData({...formData, [name]: value});
    }

    async function handleSubmit(e) {

        e.preventDefault();
        const { data } = await api.post('/login', formData);
        console.log(data.type); 
        localStorage.setItem('id', data.data[0].id);
        localStorage.setItem('log', data.type);
        if (data.data[0].id > 0){
            localStorage.setItem('isAuth', true);
            history.push('/')
        }

    }

    return(
        <div className="container-login">
            <h1 id="title">Entrar</h1>

            <form className="container-form">
                <input type="email"
                    onChange={handleInput}
                    name="email"
                    id="input-email"
                    placeholder="Digite seu e-mail"
                />
                <br></br>
                <input type="password"
                    onChange={handleInput}
                    name="password"
                    id="input-password"
                    placeholder="Digite sua senha"
                />
                <br></br>
                <input type="submit" onClick={handleSubmit} value="Entrar" className="login-submit"/>

                <Link to="/cadastro" className="link-cadastro">
                    Não se Cadastrou Ainda? Cadastre-se.
                </Link>
            </form>
        </div>
    );
}