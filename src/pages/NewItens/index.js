import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Cadastro () {
    return (
        <div className="container-cadastro">
            <h1 id="title">Cadastrar Item</h1>

            <form action="" className="container-newitens">
                <input type="categoria"
                       id="input-categoria"
                       placeholder="Digite a Categoria"
                />
                <input type="nomeItem"
                       id="input-nomeItem"
                       placeholder="Digite o Nome do Item"
                />
                <input type="quantidade"
                       id="input-quantidade"
                       placeholder="Digite a Quantidade"
                />
                <input type="preco"
                       id="input-preco"
                       placeholder="Digite o Valor do Item"
                />
                <input type="imagem"
                       id="input-id"
                       placeholder="Link do Item"
                />
                <Link to="/home">
                    <input type="submit" value="Cadastrar Item" className="login-newitem" />
                </Link>
            </form>
        </div>
    );
}
