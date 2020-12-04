import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


import './styles.css';

export default function Carrinho() {
    const {id} = useParams();
    const[carrinho, setCarrinho] = useState({});

    useEffect(() => {
        api.get(`/products/${id}`).then(response => {
            setCarrinho(...response.data.data)
        });
    },[])

    const [count, setCount] = useState(0);

    function Contador (incremento) {
        if (count + incremento < 0) {
            setCount(0);
        }else {
            setCount(count + incremento);
        }
    }

    return (
        <div className="container-carrinho">
            <div className="content-main">
                <div className="container-products">
                    <div className="container-image-product">
                        <h2 id="quant-product">PRODUTO</h2>
                        <img src={carrinho.image_adress} alt="Memoria" id="image-product" width="80" height="80"/>
                        <button id="button-remove-one">REMOVER PRODUTO</button>
                    </div>

                    <div className="info-products">
                        <h2 id="name-product">{carrinho.name}</h2>
                        <h2 id="price-product">Preço: <strong id="rs">R$ {carrinho.price}</strong></h2>
                    </div>

                    <div className="counter-products">
                        <h2 id="title-quantidade">Quantidade</h2>
                        <div className="buttons-quantidade">
                            <button id="button-negative" onClick={() => Contador(-1)}><strong>-</strong></button>
                            <h2 id="contador">{count}</h2>
                            <button id="button-positive" onClick={() => Contador(1)}><strong>+</strong></button>
                        </div>
                        <h3 id="unidades">Unidades</h3>
                    </div>

                    <div className="total-compras">
                        <h2 id="title-total">Total</h2>
                        <h4 id="rodape-total">(a vista no boleto)</h4>

                        <h2 id="price-total">R$ {count * carrinho.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}