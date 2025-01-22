import React from 'react';
import defaultPerfil from '../../assets/images/defaultperfil.png';



export default function Header() {
    return (
        <header>
            Tarefando
            <img src={defaultPerfil} alt="Perfil" />
        </header>
    )
}