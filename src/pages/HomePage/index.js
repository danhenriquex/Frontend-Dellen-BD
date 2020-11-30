import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Panels from '../../components/Panels';

import './styles.css';

export default function HomePage() {
    return(
        <div className="container-home-page">
            <header>
                <Header id="navegacao"/>
            </header>

            <section className="novidades-home">
                <Panels title="Novidades" id="conteudo" />
                <Panels title="Esportivos" id="conteudo" />
                <Panels title="Acessórios" id="conteudo" />
                <Panels title="Juvenil" id="conteudo" />
                <Panels title="Home" id="conteudo" />
                <Panels title="Sapatilhas" id="conteudo" />
            </section>

            <section className="footer-home">
                <Footer />
            </section>
        </div>
    );
}