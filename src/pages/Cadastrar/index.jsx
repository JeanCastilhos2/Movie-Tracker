import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './Cadastrar.css';

const Cadastrar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState(false);
    const [suceso, setsuceso] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api-movie-tracker.cyclic.app/user', {
                nome,
                email,
                senha
            });
            setMensagem(`Um email com sua key de acesso foi enviado para ${email}.`);
            setErro(false);
            setsuceso(true)
        } catch (error) {
            if (error.response.status === 409) {
                setMensagem(`O email ${email} já está cadastrado.`);
                setErro(true);
            } else {
                setMensagem('Ocorreu um erro ao cadastrar usuário, tente novamente.');
                setErro(true);
            }
        }
    };

    return (
        < div className='background' >
            <div className="titulo">
                <h1>A API do Movie Tracker já está disponivel em sua versão beta </h1>
                <p>Com o Movie Tracker voce tem acesso a milhares de titulos para usar de forma gratuita em seus projetos</p>
                <p>Faça sua cadastrado e começe e receba sua chave de acesso para começar agora mesmo !</p>
            </div>
            <div className="card">
                {mensagem !== '' ? (
                    <div className={`mensagem ${erro ? 'erro' : ''}`}>
                        <p>{mensagem}</p>
                        {suceso ?
                            <Link to="/documentação">
                                < button className="tentar-novamente">
                                    Documentação
                                </button>
                            </Link>
                            :
                            ""
                        }
                        {erro && (
                            <button className="tentar-novamente" onClick={() => window.location.reload()}>
                                Tentar Novamente
                            </button>
                        )}
                    </div>
                )
                    : (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                            <button type="submit">Cadastrar</button>
                        </form>
                    )
                }
            </div>
        </div >
    );
};

export default Cadastrar;
