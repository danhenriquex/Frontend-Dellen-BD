import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Historico({ pedido }) {

    const url = "https://imgcentauro-a.akamaihd.net/250x250/93836902A1/tenis-adidas-run-falcon-masculino-img.jpg";

    const [ detail, setDetail ] = useState([])
    const [ item, setItems ] = useState([])

    useEffect(async () => {
        await api.get(`/item/${pedido.id}`).then(response => {
            setDetail(response.data.data);
        })

        for (let i = 0; i < detail.length; i++){
            setItems(item => [item, detail[i]]);
        }
    })

    


    const [ show, setShow ] = useState(false)

    function handleShow(e){
        e.preventDefault();
        console.log(item)
        if (show) {
            setShow(false);
        }else {
            setShow(true);
        }

    }

    return (
        <div className="content-historico" >
            <div className="infoless">
                <h2 id="title-historico">Pedido: {pedido.id}</h2>
                <h2 id="data-historico">{pedido.date}</h2>
                <button onClick={handleShow} style={{marginLeft: '10px'}}>detalhes</button>
            </div>
            {detail.map(item => (
                <div className={show ? "infomore" : "infomore notShow"}>
                <h2>{item.name}</h2>
                <h2 className="titel-historico">{item.quantity}</h2>
                <p>{item.quantity * item.price}</p>
                </div>
            ))}
        </div>
    );
}