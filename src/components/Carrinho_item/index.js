import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/action';


const ItemCar = ({ carrinho }) => {
    const [count, setCount] = useState(0);

    if (carrinho.quantity === 0){
        carrinho.qnt = 0
    }

    function increment(plate) {

        if (plate.qnt + 1 > carrinho.quantity){
            
            dispatch(CartActions.updateAmount({
                ...plate,
                food: plate.food,
                qnt: plate.qnt,
                price: plate.price,
            }));

        }else if (carrinho.quantity === 0){
            console.log('entrou no if mzr')
            dispatch(CartActions.updateAmount({
                ...plate,
                food: plate.food,
                qnt: carrinho.quantity,
                price: plate.price,
            }))
        }
        else {

            dispatch(CartActions.updateAmount({
                ...plate,
                food: plate.food,
                qnt: plate.qnt + 1,
                price: plate.price,
            }));

        }
    }

    function decrement(plate) {
        dispatch(CartActions.updateAmount({
            ...plate,
            food: plate.food,
            qnt: plate.qnt - 1,
            price: plate.price,
        }));
    }

    const dispatch = useDispatch();

    function handleDelete(plate) {
        dispatch(CartActions.removeFromCart({...plate, food: plate.id}));
    }

    return (

        <div className="container-products">
            <div className="container-image-product">
                <h2 id="quant-product">PRODUTO</h2>
                <img src={carrinho.image_adress} alt="Memoria" id="image-product" width="80" height="80"/>
                <button onClick={()=>handleDelete(carrinho)} id="button-remove-one" style={{cursor: "pointer"}} >REMOVER PRODUTO</button>
            </div>

            <div className="info-products">
                <h2 id="name-product">{carrinho.name}</h2>
                <h2 id="price-product">Preço: <strong id="rs">R$ {carrinho.price}</strong></h2>
            </div>

            <div className="counter-products">
                <h2 id="title-quantidade">Quantidade</h2>
                <div className="buttons-quantidade">
                    <button id="button-negative" onClick={() => decrement(carrinho)}><strong>-</strong></button>
                    <h2 id="contador">{carrinho.qnt}</h2>
                    <button id="button-positive" onClick={() => increment(carrinho)}><strong>+</strong></button>
                </div>
                <h3 id="unidades">Unidades</h3>
            </div>

            <div className="total-compras">
                <h2 id="title-total">Total</h2>
                <h4 id="rodape-total">(a vista no boleto)</h4>

                <h2 id="price-total">R$ {carrinho.qnt * carrinho.price}</h2>
            </div>
        </div>
    );

}

export default ItemCar