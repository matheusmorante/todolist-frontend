import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { isMatching, registerPasswordsAreMatching } from '../utils/validations'
import EmptyFieldError from '../components/Error';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        if (
            !isMatching(password, confirmPassword, 'As senhas não coincidem')
        ) {
            return false;
        }

        const register = await authService.register({ name: username, email, password });

        if (register) {
            navigate('/login');
        }

    }

    return (
        <form>
            <label>Nome de usuário</label>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            {username.trim() === '' && <EmptyFieldError field={'Nome do usuário'} />}

            <label>Email</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
            {email.trim() === '' && <EmptyFieldError field={'Email'} />}

            <label>Senha</label>
            <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {password.trim() === '' && <EmptyFieldError field={'Senha'} />}

            <label>Repetir senha</label>
            <input
                type='password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            {password.trim() === '' && <EmptyFieldError field={'Repetir senha'} />}

            <button onClick={submit}>Concluir</button>
            <p>
                Já tem uma conta? <a href='/login'>Logar-se</a>
            </p>
        </form>
    )
}