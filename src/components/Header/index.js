import React from 'react';
import LogoTipo from '../../assets/images/logotipo.svg';
import HeartIcon from '../../assets/images/heart.svg';
import ShoppingBagIcon from '../../assets/images/shopping-bag.svg';
import UserIcon from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return(
        <header className="header-content">
            <img src={LogoTipo} id="logotipo" alt="D'Ellen"/>
            
            <input type="text" id="search-input" placeholder="O que procura?"/>
            <button type="submit">&#128269;</button>
            
            <p className="container-icons">
                
                
                <Link to="/landing">
                    <img src={UserIcon} alt="User" id="user-icon"/>
                </Link>

                <Link to="/carrinho">
                    <img src={ShoppingBagIcon} alt="Shopping" id="shopping-icon"/>
                </Link>

                <Link to="/">
                    <img src={HeartIcon} alt="Heart" id="heart-icon"/>
                </Link>
            </p>

            <nav className="menu-opcoes">
                <ul>
                    <li><Link to="/">NOVIDADES</Link></li>
                    <li><Link to="/">ESPORTIVOS</Link></li>
                    <li><Link to="/">JUVENIL</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">SAPATILHAS</Link></li>
                    <li><Link to="/">ACESSÓRIOS</Link></li>
                </ul>
            </nav>
        </header>
    );
}