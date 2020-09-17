import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import'./styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId 
                }
            });

            history.push('/profile');
        }catch(err){
            alert('Erro ao adicionar caso!');
        }

    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be Te Hero" />
                <h1>Registar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
            
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>
            </section>

            <form>
                <input 
                    placeholder ="Titulo do caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                <textarea p
                    laceholder  ="Descrição"   
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder ="Valor em reais" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleNewIncident} className="button" type="submit"> Registar </button>
            </form>
        </div>
    </div>

    );
}