import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';

export default function ChangePassword({ setCurrentForm }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const { user } = useAuth();

    const submit = async () => {
        if (newPassword !== confirmNewPassword) {
            alert('As senhas não coicidem');
            return;
        }

        await authService.changePassword({ currentPassword, newPassword, id: user.id });

        authService.logout();
    }

    return (
        <form>
            <div>
                <i className='bi bi-x-lg' onClick={() => setCurrentForm('')} />
            </div>
            <label>Senha antiga</label>
            <input value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <label>Senha nova</label>
            <input value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <label>Confirme a nova senha</label>
            <input value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button onClick={submit}>Concluir</button>
        </form>
    )
}