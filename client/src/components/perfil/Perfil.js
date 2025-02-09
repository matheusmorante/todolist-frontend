import React, { useState } from 'react';
import authService from '../../services/authService';
import ChangePassword from './ChangePassword';

export default function Perfil({ user }) {
    const [currentForm, setCurrentForm] = useState('');

    const logout = async () => {
        authService.logout()
    }

    return (
        <>
            <div>
                <h1>{user.name}</h1>
                <ul>
                    <li onClick={() => setCurrentForm('changeUsername')}>Alterar nome do usuário</li>
                    <li onClick={() => setCurrentForm('changePasswordForm')}>Alterar senha</li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
            <ChangePassword setCurrentForm={setCurrentForm} />
        </>
    )
}