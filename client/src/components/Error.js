import React from 'react';
import defaultPerfil from '../assets/images/defaultperfil.png';

export default function EmptyFieldError({ field }) {
    return (
        <p className='error'>O campo "{field}" não pode estar vazio</p>
    )
}