import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';

export default function ChangeUsername({ setCurrentForm }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useAuth();

    const submit = async () => {
        await authService.changeUsername({ username, password, id: user.id });

        setCurrentForm('');
    }

    return (
        <form>
            <div>
                <i className='bi bi-x-lg' onClick={() => setCurrentForm('')} />
            </div>
            <label>Novo nome de usuário</label>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <label>Senha</label>
            <input value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={submit}>Concluir</button>
        </form>
    )
}