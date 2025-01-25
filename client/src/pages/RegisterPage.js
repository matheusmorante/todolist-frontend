import React, { useState } from 'react';
import userService from '../services/userService';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log('As senhas não coicidem');
            return;
        }

        try {
            const data = { name: username, email, password };
            const user = await userService.addTask(data);
            console.log('Usuário adicionado com sucesso:', user);
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