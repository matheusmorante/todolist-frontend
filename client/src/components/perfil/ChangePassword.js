import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    const submit = async () => {
        if (newPassword !== confirmNewPassword) {
            alert('As senhas não coicidem');
            return;
        }

        await authService.changePassword(
            { oldPassword, storedPassword: user.password, newPassword, id: user.id }
        );

        await authService.logout();
        navigate('/login');
    }

    return (
        <form>
            <label>Senha antiga</label>
            <input value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
            <label>Senha nova</label>
            <input value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <label>Confirme a nova senha</label>
            <input value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button onClick={submit}>Concluir</button>
        </form>
    )
}