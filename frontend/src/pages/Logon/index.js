import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi'; // fonte feathericon
import {Link, useHistory} from 'react-router-dom'; // para fazer o "Link" das rotas para
// que o react não seja todo carregado
import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            //guardar info no browser
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch(err){
            alert('falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu login</h1>
                    <input 
                    placeholder="Seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
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