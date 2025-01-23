import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form>
            <label>Email</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Senha</label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Concluir</button>
            <p>
                Ainda não se cadastrou?
                <span onClick={() => {useNavigate('/register')}}>Cadastra-se</span>
            </p>
        </form>
        
    )  
}