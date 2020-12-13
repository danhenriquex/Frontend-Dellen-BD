import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import api from '../../services/api';
import './styles.css';

export default function Register() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsaap] = useState('');
    const[password, setPassword] = useState('');

    const history = useHistory();

    async function HandleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            password
        };

        try {
            const response = await api.post('/users', data);
            console.log(response)

            alert("Usuário cadastrado com Sucesso!");

            history.push('/login');

        }catch(err) {
            alert("Erro no cadastro, tente novamente!");
        }
    }

    return(
        <div className="container-login">
            <h1 id="title">Cadastro</h1>

            <form className="container-form" onSubmit={HandleRegister}>
                <input 
                    type="text" 
                    id="input-name" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                <input 
                    type="email" 
                    id="input-email" 
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br></br>
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    id="input-name"
                    placeholder="Digite o seu número"
                    guide={false}
                    value={whatsapp}
                    onBlur={() => {}}
                    onChange={e => setWhatsaap(e.target.value)}
                />
                <input 
                    type="password" 
                    id="input-password" 
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <input type="submit" value="Cadastrar" className="login-submit"/>

                <Link to="/login" className="link-cadastro">
                    Já tem Cadastro? Faça Login.
                </Link>
            </form>
        </div>
    );
}