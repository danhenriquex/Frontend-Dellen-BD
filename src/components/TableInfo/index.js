import React from 'react';

import './styles.css';


export default function TableInfo() {
    return (
        <table id="table-info">
            <tr className="all-tr">
                <th id="title-main">INFORMAÇÕES BÁSICAS</th>
                <th id="title-main">INFORMAÇÕES DO PRODUTO</th>
            </tr>
            <br></br><br></br>
            <tr className="all-tr">
                <td id="first-row">MARCA</td>
                <td id="second-row">Nike</td>
            </tr>
            <tr className="all-tr">
                <td id="first-row">GÊNERO</td>
                <td id="second-row">Feminino</td>
            </tr>
            <tr className="all-tr">
                <td id="first-row">FAIXA ETÁRIA</td>
                <td id="second-row">Adulto</td>
            </tr>
            <tr className="all-tr">
                <td id="first-row">CATEGORIA</td>
                <td id="second-row">Tênis</td>
            </tr>
        </table>
    );
}