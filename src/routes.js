import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Panels from './components/Panels';
import Footer from './components/Footer';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import Compra from './components/Compra';
import TableInfo from './components/TableInfo';
import ForgotPassword from './pages/ForgotPassword';
import Carrinho from './components/Carrinho';
import NewItens from './pages/NewItens';
import InfoPreco from './components/Infopreco';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Register} />
            <Route path="/header" component={Header} />
            <Route path="/main" component={Panels} />
            <Route path="/footer" component={Footer} />
            <Route path="/menu" component={Menu} />
            <Route path="/home" component={HomePage} />
            <Route path="/compra" component={Compra} />
            <Route path="/table" component={TableInfo} />
            <Route path="/senha" component={ForgotPassword} />
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/newitens" component={NewItens} />
            <Route path="/infopreco" component={InfoPreco} />
        </BrowserRouter>
    );
}