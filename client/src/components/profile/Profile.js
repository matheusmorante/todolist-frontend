import React, { useState, useEffect } from 'react';
import authService from '../../services/authService';
import ChangeUsernameForm from './ChangeUsernameForm';
import ChangeEmailForm from './ChangeEmailForm';
import ChangePasswordForm from './ChangePasswordForm';
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
            <div className='modal' id='profile' onClick={e => e.stopPropagation()}>
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
                    currentForm === 'changeUsername' && <ChangeUsernameForm setCurrentForm={setCurrentForm} />
                }
                {
                    currentForm === 'changePassword' && <ChangePasswordForm setCurrentForm={setCurrentForm} />
                }
                {
                    currentForm === 'changeEmail' && <ChangeEmailForm setCurrentForm={setCurrentForm} />
                }
            </div>
        </div>
    )
}