import React, {useState} from 'react';

export default function Perfil({ user }) {
    const [changingPassword, setChangingPassword ] = useState(false);
    
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                <li>Alterar nome</li>
                <li onClick={setChangingPassword(true)}>Alterar senha</li>
            </ul>
        </div>
    )
}