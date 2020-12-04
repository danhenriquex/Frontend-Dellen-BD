import React from 'react';
import { Link } from 'react-router-dom';
import SloganImage from '../../assets/images/slogan.jpg';

import './styles.css';

export default function Panels(props) {
    return(
        <div className="container-paineis">
            <section className="painel novidades">
                <h2>{props.title}</h2>
                <ol>
                    {props.product.map(produto =>(
                        <li>
                            <Link to={`/compra/${produto.id}`}>
                                <figure>
                                    <img src={produto.image_adress} alt="Produto1" id="produto"/>
                                    <figcaption>{produto.name}</figcaption>
                                    <span>R$ {produto.price}</span>
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>
            <img src={SloganImage} alt="Slogan" id="image-slogan"/>
        </div>
    );
}