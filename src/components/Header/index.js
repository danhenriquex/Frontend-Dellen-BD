import React, { useEffect, useState } from 'react';
import LogoTipo from '../../assets/images/logotipo.svg';
import HeartIcon from '../../assets/images/heart.svg';
import ShoppingBagIcon from '../../assets/images/shopping-bag.svg';
import UserIcon from '../../assets/images/user.svg';
import { Link, useHistory } from 'react-router-dom';

import * as CartActions from '../../store/modules/cart/action';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import api from '../../services/api';

export default function Header() {

    const [ user, setUser ] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const log = localStorage.getItem('log');

        if (log == 1){
            api.get(`/user/${id}`).then(response => {
                setUser(response.data[0])
            })
        }else {
            api.get(`/seller/${id}`).then(response => {
                setUser(response.data[0])
            })
        }


    },[])

    const history = useHistory()

    function handleLogout(){

        localStorage.removeItem('id');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('log');

        history.push('/login');
    }


    const cartSize = useSelector(state => state.cart.length);

    return(

        
        <header className="header-content">
            <Link to="/"><img src={LogoTipo} id="logotipo" alt="D'Ellen"/></Link>
            
            <input type="text" id="search-input" placeholder="O que procura?"/>
            <button type="submit">&#128269;</button>
            
            <p className="container-icons">
                
                <Link className="link" to="/historico">
                    <p>Olá {user.name}</p>
                    <img src={UserIcon} alt="User" id="user-icon"/>
                </Link>

                {localStorage.getItem('log') == 0 ? (
                    <Link className="link" to='/newitens'>  
                        Cadastrar item
                    </Link>
                ) : null}
                <Link className="link" to="/carrinho" className="cart">
                    <img src={ShoppingBagIcon} alt="Shopping" id="shopping-icon"/>
                    <div className={cartSize > 0 ? "number show" : "number"}>
                        {cartSize}
                    </div>
                </Link>

                <Link onClick={handleLogout} className="link" >
                    Sair
                </Link>
            </p>

            <nav className="menu-opcoes">
                <ul>
                    <li><a href="#novidades">NOVIDADES</a></li>
                    <li><a href="#esportivos">ESPORTIVOS</a></li>
                    <li><a href="#juvenil">JUVENIL</a></li>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#sapatilha">SAPATILHAS</a></li>
                    <li><a href="#acessorios">ACESSÓRIOS</a></li>
                </ul>
            </nav>
        </header>
    );
}