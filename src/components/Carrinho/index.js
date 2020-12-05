import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/action';

import ItemCar from '../Carrinho_item'


import './styles.css';

export default function Carrinho() {
    const {id} = useParams();
    const[carrinho, setCarrinho] = useState({});

    const car = useSelector(state =>
        state.cart.map(plate => ({
        ...plate,
        }))
    );

    console.log(car);

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
    
    const dispatch = useDispatch();

    function handleDelete(plate) {
        dispatch(CartActions.removeFromCart({...plate, food: plate.id}));
    }

    return (
        <div className="container-carrinho">
            <div className="content-main">
                <div>
                    {car.map(carrinho => (
                        <ItemCar carrinho={carrinho} />
                    ))}
                </div>
            </div>
        </div>
    );
}