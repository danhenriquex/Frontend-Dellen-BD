import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Dolar from '../../assets/images/dollar-sign.svg'
import api from '../../services/api';

import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/action';

import './styles.css'

export default function Infopreco({ total, car }) {

    const dispatch = useDispatch();
    const history = useHistory();

    function handleClearCart(car) {
        dispatch(CartActions.clearCart(car));
    }

    const cartSize = useSelector(state => state.cart.length);

    const [ product, setProduct ] = useState([]);
    const [ products, setProducts ] = useState([]);

    useEffect(() => {

        setProducts([]);
        
        for (let i = 0; i < cartSize; i++){
            
            let array = [];
            array = [car[i].id, car[i].qnt, car[i].price]
            setProducts(products => [...products, array]);

        }
    }, [car]);

    async function finish_order(){
        
        const data = {
            'id': parseInt(localStorage.getItem('id')),
            'products': products,
        }

        await api.post('/order', data);
        handleClearCart(car);
        history.push('/');

    }
    

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
                <span id="totalprec">R$ {total}</span>
            </div>
            <div className="fretetotal">
                <span id="fretetudo">Frete: </span>
                <span id="fretepreco">R$ 2,50</span>
            </div>
            <div className="valortotalresult">
                <span id="produtototal"><strong>Valor Total: </strong></span>
                <span id="precoproduto"><strong>R$ {total + 2.50}</strong></span>
            </div>
            <div className="butaofinaliza">
                <button id="finalizar-compra" onClick={finish_order}>Finalizar Compra</button>
            </div>
        </div> 
    );
}

















