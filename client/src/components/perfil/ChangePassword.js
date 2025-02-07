import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import authService from '../../services/authService';

export default function changePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const {user} = AuthContext();

    const submit = (e) => {
        if (newPassword !== confirmNewPassword) {
            alert('As senhas não coicidem');
            return;
        }

        try {
            authService.changePassword(oldPassword, user.password, newPassword);
        } catch (e) {
            
        }
    }

    return(
        <form>
            <label>Senha antiga</label>
            <input value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
            <label>Senha nova</label>
            <input value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <label>Confirme a nova senha</label>
            <input value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button onClick={submit}>Concluir</button>
        </form>
    )
}