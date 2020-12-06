import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dolar from '../../assets/images/dollar-sign.svg'
import api from '../../services/api';

import './styles.css'

export default function Infopreco() {
    return(
        <div className="alltable">
            <h1 id="dolar-sign">
                <img src={Dolar} alt="Precodolar" id="preco-icon-dollar" />
                PREÇO
            </h1>

            <div className="tableespaco">
                
            </div>
            <div className="totaldeprodutos">
                <span id="totalprod">Total de produtos: </span>
                <span id="totalprec">R$ 200,00</span>
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
                <button id="finalizar-compra">Finalizar Compra</button>
            </div>
        </div> 
    );
}

















