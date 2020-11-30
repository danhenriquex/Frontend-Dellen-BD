import React, { useState } from 'react';

import ShoppingCarr from '../../assets/images/shopping-cart.svg';

import './styles.css';

export default function Carrinho() {

    const [count, setCount] = useState(0);

    function Contador (incremento) {
        if (count + incremento < 0) {
            setCount(0);
        }else {
            setCount(count + incremento);
        }
    }
    
    const url = "https://images3.kabum.com.br/produtos/fotos/99683/processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_1564429485_m.jpg"

    return (
        <div className="container-carrinho">
            <div className="content-main">
                <div className="container-products">
                    <div className="container-image-product">
                        <h2 id="quant-product">PRODUTO 01</h2>
                        <img src={url} alt="Memoria" id="image-product" width="80" height="80"/>
                        <button id="button-remove-one">REMOVER PRODUTO</button>
                    </div>

                    <div className="info-products">
                        <h2 id="name-product">Processador Intel Core i5-9400F Coffee Lake, Cache 9MB, 2.9GHz (4.1GHz Max)</h2>
                        <h2 id="price-product">Preço: <strong id="rs">R$ 500,00</strong></h2>
                    </div>

                    <div className="counter-products">
                        <h2 id="title-quantidade">Quantidade</h2>
                        <div className="buttons-quantidade">
                            <button id="button-negative" onClick={() => Contador(-1)}><strong>-</strong></button>
                            <h2 id="contador">{count}</h2>
                            <button id="button-positive" onClick={() => Contador(1) }><strong>+</strong></button>
                        </div>
                        <h3 id="unidades">Unidades</h3>
                    </div>

                    <div className="total-compras">
                        <h2 id="title-total">Total</h2>
                        <h4 id="rodape-total">(a vista no boleto)</h4>

                        <h2 id="price-total">R$ 500,00</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}