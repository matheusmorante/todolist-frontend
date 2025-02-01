import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('As senhas não coicidem');
            return;
        }

        try {
            const userData = { name: username, email, password };
            const register = await authService.register(userData);

            if(register) {
                navigate('/login');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    return (
        <form>
            <label>Nome do Usuário</label>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            <label>Email</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
            <label>Senha</label>
            <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <label>Repetir senha</label>
            <input
                type='password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            <button onClick={submit}>Concluir</button>

            <p>
                Já tem uma conta? <a href='/login'>Logar-se</a>
            </p>
        </form>
    )
}