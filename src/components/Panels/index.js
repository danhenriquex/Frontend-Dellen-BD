import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../assets/images/card.svg';
import SloganImage from '../../assets/images/slogan.jpg';

import './styles.css';

export default function Panels(props) {
    return(
        <div className="container-paineis">
            <section className="painel novidades">
                <h2>{props.title}</h2>
                <ol>
                    <li>
                        <Link to="/compra">
                            <figure>
                                <img src="https://imgcentauro-a.akamaihd.net/900x900/9438545G/tenis-mizuno-wave-creation-21-masculino-img.jpg" alt="Produto1" id="produto"/>
                                <figcaption>Sapato Feminino</figcaption>
                                <span>R$ 150.00</span>
                            </figure>
                        </Link>
                    </li>

                    <li>
                        <Link to="/compra">
                            <figure>
                                <img src="https://imgcentauro-a.akamaihd.net/900x900/9438545G/tenis-mizuno-wave-creation-21-masculino-img.jpg" alt="Produto1" id="produto"/>
                                <figcaption>Sapato Feminino</figcaption>
                                <span>R$ 150.00</span>
                            </figure>
                        </Link>
                    </li>

                    <li>
                        <Link to="/compra">
                            <figure>
                                <img src="https://imgcentauro-a.akamaihd.net/900x900/9438545G/tenis-mizuno-wave-creation-21-masculino-img.jpg" alt="Produto1" id="produto"/>
                                <figcaption>Sapato Feminino</figcaption>
                                <span>R$ 150.00</span>
                            </figure>
                        </Link>
                    </li>

                    <li>
                        <Link to="/compra">
                            <figure>
                                <img src="https://imgcentauro-a.akamaihd.net/900x900/9438545G/tenis-mizuno-wave-creation-21-masculino-img.jpg" alt="Produto1" id="produto"/>
                                <figcaption>Sapato Feminino</figcaption>
                                <span>R$ 150.00</span>
                            </figure>
                        </Link>
                    </li>

                    <li>
                        <Link to="/compra">
                            <figure>
                                <img src="https://imgcentauro-a.akamaihd.net/900x900/9438545G/tenis-mizuno-wave-creation-21-masculino-img.jpg" alt="Produto1" id="produto"/>
                                <figcaption>Sapato Feminino</figcaption>
                                <span>R$ 150.00</span>
                            </figure>
                        </Link>
                    </li>

                    <li>
                        <Link to="/compra">
                            <figure>
                                <img src="https://imgcentauro-a.akamaihd.net/900x900/9438545G/tenis-mizuno-wave-creation-21-masculino-img.jpg" alt="Produto1" id="produto"/>
                                <figcaption>Sapato Feminino</figcaption>
                                <span>R$ 150.00</span>
                            </figure>
                        </Link>
                    </li>
                </ol>
            </section>
            <img src={SloganImage} alt="Slogan" id="image-slogan"/>
        </div>
    );
}