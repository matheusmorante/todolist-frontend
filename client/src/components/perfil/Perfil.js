import React, { useState } from 'react';
import authService from '../../services/authService';
import ChangeUsername from './ChangeUsername';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import { useNavigate } from "react-router-dom";

export default function Perfil({ user}) {
    const [currentForm, setCurrentForm] = useState('');
    const navigate = useNavigate();

    const logout = async () => {
        await authService.logout();
        navigate('/login');
    }

    return (
        <>
            <div>
                <h1>{user.name}</h1>
                <ul>
                    <li onClick={() => setCurrentForm('changeUsername')}>Alterar nome do usuário</li>
                    <li onClick={() => setCurrentForm('changeEmail')}>Alterar email</li>
                    <li onClick={() => setCurrentForm('changePassword')}>Alterar senha</li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
            {
                currentForm === 'changeUsername' && <ChangeUsername setCurrentForm={setCurrentForm} />
            }
            {
                currentForm === 'changePassword' && <ChangePassword setCurrentForm={setCurrentForm} />
            }
            {
                currentForm === 'changeEmail' && <ChangeEmail setCurrentForm={setCurrentForm} />
            }
        </>
    )
}