import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();
        const loggedIn = await authService.login({ login, password });

        if(loggedIn) {
            navigate('/')
        }
    }

    return (
        <form>
            <label>Nome de Usuário/Email</label>
            <input type='text' value={login} onChange={e => setLogin(e.target.value)}/>
            <label>Senha</label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={submit}>Concluir</button>
            <p>
                Ainda não se cadastrou? <a href='/register'>Cadastrar-se</a>
            </p>
        </form>
        
    )  
}