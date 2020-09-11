import React from 'react';
import { FiLogIn } from 'react-icons/fi'; // fonte feathericon
import {Link} from 'react-router-dom'; // para fazer o "Link" das rotas para
// que o react não seja todo carregado

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça o seu login</h1>
                    <input placeholder="Seu ID"/>
                    <button className="button" type="submit">Login</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho login
                    </Link>
                </form>
            </section>

            <img src={heroesImg}  alt="Heroes" />
        </div> 
    );
}