import React, { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <form>
            <label>Nome do Usuário</label>
            <input type='text' value={email} onChange={e => setText(e.target.value)} />
            <label>Email</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
            <label>Senha</label>
            <input 
                type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <label>Repetir a Senha</label>
            <input 
                type='password' 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
            />
            <button>Concluir</button>
        </form>
    )
}