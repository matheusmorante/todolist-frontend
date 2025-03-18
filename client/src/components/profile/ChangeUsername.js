import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import userService from '../../services/userService';

export default function ChangeUsername({ setCurrentForm }) {
    const [newUsername, setNewUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useAuth();

    const submit = async (e) => {
        e.preventDefault();
        const changeUsername = await userService.changeUsername(
            { newUsername, password, id: user.id }
        );

        if(changeUsername) {
            setCurrentForm('');
        }
    }

    return (
        <form>
            <div>
                <i className='bi bi-x-lg' onClick={() => setCurrentForm('')} />
            </div>
            <label>Novo nome de usuário</label>
            <input value={newUsername} onChange={e => setNewUsername(e.target.value)} />
            <label>Senha</label>
            <input value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={submit}>Concluir</button>
        </form>
    )
}