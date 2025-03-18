import React, { useState, useEffect } from 'react';
import authService from '../../services/authService';
import ChangeUsername from './ChangeUsername';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';
import { useNavigate } from "react-router-dom";

export default function Perfil({ user, showProfile, setShowProfile }) {
    const [currentForm, setCurrentForm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (showProfile) {
            document.body.style.overflow = 'hidden';
        } else {
            
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showProfile])

    const logout = () => {
        navigate('');
        authService.logout();
    }

    return (
        <div className='overlay' onClick={() => setShowProfile(false)}> 
            <div className='modal' id='profile'>
                <div>
                    <i className='bi bi-x-lg' onClick={() => setShowProfile(false)} />
                </div>
                <h1>{user.name}</h1>
                <ul>
                    <li onClick={() => setCurrentForm('changeUsername')}>Alterar nome do usuário</li>
                    <li onClick={() => setCurrentForm('changeEmail')}>Alterar email</li>
                    <li onClick={() => setCurrentForm('changePassword')}>Alterar senha</li>
                    <li onClick={logout}>Logout</li>
                </ul>
                {
                    currentForm === 'changeUsername' && <ChangeUsername setCurrentForm={setCurrentForm} />
                }
                {
                    currentForm === 'changePassword' && <ChangePassword setCurrentForm={setCurrentForm} />
                }
                {
                    currentForm === 'changeEmail' && <ChangeEmail setCurrentForm={setCurrentForm} />
                }
            </div>
        </div>
    )
}