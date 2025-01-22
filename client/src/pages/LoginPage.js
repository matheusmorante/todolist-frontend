import React, { useState } from 'react';

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
        </form>
        
    )
}