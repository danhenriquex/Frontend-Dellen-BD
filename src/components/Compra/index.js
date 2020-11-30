import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import TableInfo from '../TableInfo';
import Truck from '../../assets/images/truck.svg';
import Card from '../../assets/images/card.svg';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Compra() {
    return(
        <div className="container-compra">
            <header>
                <Header />
            </header>

            <div className="frete">
                <img src={Truck} alt="Caminhão" id="img-truck"/>
                <h1 id="text-frete"><strong>FRETE GRÁTIS</strong></h1>
                <h2 id="descricao-frete">A partir de R$ 69,99 |</h2>
                <h2 id="descricao-prazo">Prazo de troca estendido para 90 dias.</h2>
            </div>
            <h2 id="title-compras">Sapato Vermelho</h2>

            <div className="container-principal">
                <section className="container-img">
                    <img src={Card} id="produto-img" alt="Sapato Vermelho"/>
                </section>

                <section className="container-cores">
                    <span id="price-item">R$ 29,99</span>
                    <form>
                        <fieldset className="cores">
                            <legend id="title-color">COR:</legend>
                            <button	type="button" id="branco">B</button>
                            <button	type="button" id="vermelho">V</button>
                            <button	type="button" id="preto">P</button>
                        </fieldset>
                    </form>
                        <div className="tamanhos">
                            <h3>TAMANHO</h3>
                            <form>
                                <select id="button-select">
                                    <option>34</option>
                                    <option>36</option>
                                    <option>38</option>
                                    <option>40</option>
                                </select>
                                <h3>QUANTIDADE</h3>
                                <input type="number" id="quantidade-compra" min="1" max="200" />
                            </form>
                        </div>
                    <div className="comprar">
                        <button type="submit" id="button-compra">Comprar</button>
                        <button type="submit" id="button-voltar">Voltar</button>
                    </div>
                    <Link to="/" id="link-carrinho">adicionar à sacola.</Link>
                </section>
            </div>
            <div className="informacoes">
                <TableInfo />
            </div>
            <footer>
                <Footer id="footer-compra"/>
            </footer>
        </div>
    );
}