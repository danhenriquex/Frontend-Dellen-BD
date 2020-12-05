import React from 'react';
import LogoTipo from '../../assets/images/logotipo.svg';
import HeartIcon from '../../assets/images/heart.svg';
import ShoppingBagIcon from '../../assets/images/shopping-bag.svg';
import UserIcon from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';

import * as CartActions from '../../store/modules/cart/action';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';

export default function Header() {

    

    const cartSize = useSelector(state => state.cart.length);

    return(

        
        <header className="header-content">
            <Link to="/home"><img src={LogoTipo} id="logotipo" alt="D'Ellen"/></Link>
            
            <input type="text" id="search-input" placeholder="O que procura?"/>
            <button type="submit">&#128269;</button>
            
            <p className="container-icons">
                
                
                <Link to="/landing">
                    <img src={UserIcon} alt="User" id="user-icon"/>
                </Link>

                <Link to="/carrinho" className="cart">
                    <img src={ShoppingBagIcon} alt="Shopping" id="shopping-icon"/>
                    <div className={cartSize > 0 ? "number show" : "number"}>
                        {cartSize}
                    </div>
                </Link>

                <Link to="/">
                    <img src={HeartIcon} alt="Heart" id="heart-icon"/>
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