import React, { useEffect, useState } from 'react';

import './styles.css';
import api from '../../services/api'
import { useParams } from 'react-router-dom';


export default function TableInfo() {

    const {id} = useParams();
    const[description, setDescription] = useState({});

    useEffect(() => {
        api.get(`/products/${id}`).then(response => {
            setDescription(...response.data.data)
        });

    },[])

    return (
        <table id="table-info">
            <tr className="all-tr">
                <th id="title-main">INFORMAÇÕES BÁSICAS</th>
                <th id="title-main">INFORMAÇÕES DO PRODUTO</th>
            </tr>
            <br></br><br></br>
            <tr className="all-tr">
                <td id="first-row">MARCA</td>
                <td id="second-row">{description.brand}</td>
            </tr>
            <tr className="all-tr">
                <td id="first-row">GÊNERO</td>
                <td id="second-row">{description.genre}</td>
            </tr>
            <tr className="all-tr">
                <td id="first-row">FAIXA ETÁRIA</td>
                <td id="second-row">{description.age_range}</td>
            </tr>
            <tr className="all-tr">
                <td id="first-row">CATEGORIA</td>
                <td id="second-row">{description.id_category}</td>
            </tr>
        </table>
    );
}