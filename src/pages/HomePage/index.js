import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Panels from '../../components/Panels';

import './styles.css';
import api from '../../services/api';

export default function HomePage() {
    
    const [novidades, SetNovidadesCategory] = useState([])
    const [esportivos, EsportivosCategory] = useState([])
    const [sapatilhas, SapatilhasCategory] = useState([])
    const [juvenil, JuvenilCategory] = useState([])
    const [home, HomeCategory] = useState([])
    const [acessorios, AcessoriosCategory] = useState([])
    const[products, setProducts] = useState([]);
    const[camisas, setCamisas] = useState([]);

    useEffect(() => {
        api.put('/products/1').then(response => {
            SetNovidadesCategory(response.data.data)
        })
        api.put('/products/2').then(response => {
            setCamisas(response.data.data)
        })
        api.put('/products/3').then(response => {
            EsportivosCategory(response.data.data)
        })
        api.put('/products/4').then(response => {
            AcessoriosCategory(response.data.data)
        })
        api.put('/products/5').then(response => {
            JuvenilCategory(response.data.data)
        })
        api.put('/products/6').then(response => {
            HomeCategory(response.data.data)
        })

        api.put('/products/7').then(response => {
            SapatilhasCategory(response.data.data)
        })

    },[])
    
    return(
        <div className="container-home-page">
            <header>
                <Header id="navegacao"/>
            </header>

            <section className="novidades-home">
                <Panels product={novidades} title="Novidades" id="conteudo" />
                <Panels product={esportivos} title="Esportivos" id="conteudo" />
                <Panels product={acessorios} title="Acessórios" id="conteudo" />
                <Panels product={juvenil} title="Juvenil" id="conteudo" />
                <Panels product={home} title="Home" id="conteudo" />
                <Panels product={sapatilhas} title="Sapatilhas" id="conteudo" />
            </section>

            <section className="footer-home">
                <Footer />
            </section>
        </div>
    );
}