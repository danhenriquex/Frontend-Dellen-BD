import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import api from '../../services/api';

import './styles.css'

export default function ForgotPassword(){
    const[email, setEmail] = useState('');
    const[atual, setAtual] = useState('');
    const[name, setName] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[password, setPassword] = useState('');

    const history = useHistory();

    async function HandleForgotPassword(e) {
        e.preventDefault();

        const data = {
            email,
            atual,
            password
        };

        try {
            const response = await api.put('/users',data);

            alert("Dados Alterados com Sucesso!");

            history.push('/login');
        }catch(err) {
            alert("Erro ao Alterar os Dados!");
        }
    }

    return(
        <div className="container-senha">
            <h1 id="title-senha">Esqueci Minha Senha</h1>

            <form className="container-form" onSubmit={HandleForgotPassword}>
                <input 
                    type="email" 
                    id="input-email" 
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    id="input-name" 
                    placeholder="Digite sua senha atual"
                    value={atual}
                    onChange={e => setAtual(e.target.value)}
                />
                <input 
                    type="password" 
                    id="input-name" 
                    placeholder="Digite sua nova Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Alterar" className="login-submit"/>

                <Link to="/cadastro" className="link-cadastro">
                    Já Alterou seus Dados? Faça Login.
                </Link>
            </form>
        </div>
    );
}