import React from 'react';
import Dolar from '../../assets/images/dollar-sign.svg'

import './styles.css'

export default function Infopreco() {
    return(
        <div className="alltable">
            <h1>
                <img src={Dolar} alt="Precodolar" id="preco-icon-dollar" />
                PREÇO
            </h1>
            <div className="tableespaco">
                
            </div>
            <div className="totaldeprodutos">
                <span id="totalprod">Total de produtos: </span>
                <span id="totalprec">R$ 144,90</span>
            </div>
            <div className="fretetotal">
                <span id="fretetudo">Frete: </span>
                <span id="fretepreco">R$ 2,50</span>
            </div>
            <div className="valortotalresult">
                <span id="produtototal"><strong>Valor Total: </strong></span>
                <span id="precoproduto"><strong>R$ 147,40</strong></span>
            </div>
            <div className="butaofinaliza">
                <input type="submitbuy" value="Finalizar Compra" className="finalizar-compra"/>
            </div>


        </div>
        
    )
}

/*<img src={Dolar} alt="Precodolar" id="preco-icon-dollar" />*/
















