import React from 'react';

export default function Perfil({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                <li>Alterar nome</li>
                <li>Alterar senha</li>
            </ul>
        </div>
    )
}