import React from 'react';
import LogoMaster from '../../assets/images/mastercard.svg';
import LogoBitCoin from '../../assets/images/bitcoin.svg';
import ExpressAmerican from '../../assets/images/expresso-americano.svg';
import LogoTipo from '../../assets/images/logotipo.svg';
import { Link } from 'react-router-dom';
import FacebookLogo from '../../assets/images/facebook.svg';
import TwitterLogo from '../../assets/images/twitter.svg';
import InstagramLogo from '../../assets/images/instagram.svg';


import './styles.css';

export default function Footer() {
    return(
        <div className="container-tables">
            <div className="fale-conosco">
                <table>
                    <tr>
                        <th id="title-fale-conosco">FALE CONOSCO</th>
                    </tr>
                    <tr>
                        <td id="title-td-conosco">WhatsApp(11) 4004-8008</td>
                    </tr>
                    <tr>
                        <td id="title-td-conosco">Atendimento</td>
                    </tr>
                    <tr>
                        <td id="title-td-conosco">Soluções Para Empresa</td>
                    </tr>
                </table>
            </div>
            <div className="ajuda-e-suporte">
                <table>
                        <tr>
                            <th id="title-fale-conosco">AJUDA E SUPORTE</th>
                        </tr>
                        <tr>
                            <td id="title-td-suporte">Política e Privacidade</td>
                        </tr>
                        <tr>
                            <td id="title-td-suporte">Serviços</td>
                        </tr>
                        <tr>
                            <td id="title-td-suporte">Termos e condições</td>
                        </tr>
                        <tr>
                            <td id="title-td-suporte">COVID-19 Informações</td>
                        </tr>
                    </table>
            </div>
            <div className="black-friday">
                <table>
                    <tr>
                        <th id="title-fale-conosco">BLACK FRIDAY</th>
                        </tr>
                    <tr>
                        <td id="title-td-black">Prepare-se para a Black Friday</td>
                    </tr>
                </table>
            </div>
            <section className="container-pay">
                <h5 id="title-pay">Formas de Pagamento</h5>
                <img src={LogoMaster} alt="MasterCard" width="25" height="20" id="logo-master"/>
                <img src={LogoBitCoin} alt="MasterCard" width="25" height="20" id="logo-bit-coin"/>
                <img src={ExpressAmerican} alt="MasterCard" width="25" height="20" id="logo-express"/>
            </section>
            <div className="container-footer">
                <img src={LogoTipo} alt="D'Ellen"/>
                <p className="container-media">
                    <Link to="/">
                        <img src={FacebookLogo} alt="Facebook" height="20" id="facebook-icon"/>
                    </Link>

                    <Link to="/">
                        <img src={TwitterLogo} alt="Twitter" height="20" id="twitter-icon"/>
                    </Link>

                    <Link to="/">
                        <img src={InstagramLogo} alt="Google+" height="20" id="google-icon"/>
                    </Link>
                </p>
            </div>
        </div>
    );
}