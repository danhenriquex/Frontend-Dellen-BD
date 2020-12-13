import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/action';
import Header from '../Header';
import Footer from '../Footer';
import InfoPreco from '../Infopreco';

import ItemCar from '../Carrinho_item'


import './styles.css';

export default function Carrinho() {
    const {id} = useParams();
    const[carrinho, setCarrinho] = useState({});

    const car = useSelector(state =>
        state.cart.map(plate => ({
        ...plate,
        subtotal: Math.trunc(plate.qnt * plate.price),
        }))
    );

    const total = useSelector(state =>
        state.cart.reduce((totalSum, product) => {
          return totalSum + product.price * product.qnt;
        }, 0)
    );

    const dispatch = useDispatch();

    const cartSize = useSelector(state => state.cart.length);

    const [count, setCount] = useState(0);


    function handleDelete(plate) {
        dispatch(CartActions.removeFromCart({...plate, food: plate.id}));
    }

    return (
        <div className="container-carrinho">
            <div className="header-carrinho">
                <Header />
            </div>
            <div className="content-main">
                <div>
                    {car.map(carrinho => (
                        <ItemCar carrinho={carrinho} />
                    ))}
                </div>
            </div>
            <div className="compra-finalizar-carrinho">
                <InfoPreco car={car} total={total} />
            </div>
            <div className="footer-carrinho">
                <Footer />
            </div>
        </div>
    );
}