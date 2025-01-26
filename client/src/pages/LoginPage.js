import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();

        const loginSuccess = await authService.login();

        if(loginSuccess) {
            navigate('/home')
        }
    }

    return (
        <form>
            <label>Email</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Senha</label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={submit}>Concluir</button>
            <p>
                Ainda não se cadastrou? <a href='/register'>Cadastrar-se</a>
            </p>
        </form>
        
    )  
}