import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import userService from '../../services/userService';

export default function ChangeEmailForm({ setCurrentForm }) {
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useAuth();

    const submit = async (e) => {
        e.preventDefault();
        await userService.changeEmail({ newEmail, password, id: user.id });

        setCurrentForm('');
    }

    return (
        <form className='fullscreen-form form'>
            <div>
                <i className='bi bi-x-lg' onClick={() => setCurrentForm('')} />
            </div>
            <label>Novo email</label>
            <input value={newEmail} onChange={e => setNewEmail(e.target.value)} />
            <label>Senha</label>
            <input value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={submit}>Concluir</button>
        </form>
    )
}