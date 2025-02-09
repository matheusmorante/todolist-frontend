import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';

export default function ChangeEmail({ setCurrentForm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useAuth();

    const submit = async () => {
        await authService.changeEmail({ email, password, id: user.id });

        setCurrentForm('');
    }

    return (
        <form>
            <div>
                <i className='bi bi-x-lg' onClick={() => setCurrentForm('')} />
            </div>
            <label>Novo email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <label>Senha</label>
            <input value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={submit}>Concluir</button>
        </form>
    )
}