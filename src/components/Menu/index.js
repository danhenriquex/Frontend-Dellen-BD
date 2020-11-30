import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


export default function Menu() {
    return(
        <section className="menu">
            <nav>
                <ul>
                    <li><Link to="/">Blusas e Camisas</Link></li>
                    <li><Link to="/">Calças</Link></li>
                    <li><Link to="/">Saias</Link></li>
                    <li><Link to="/">Vestidos</Link></li>
                    <li><Link to="/">Bolsas e Carteiras</Link></li>
                    <li><Link to="/">Acessórios</Link></li>
                </ul>
            </nav>
        </section>
    );
}