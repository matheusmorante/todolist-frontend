import React from 'react';

export default function EmptyFieldError({ field }) {
    return (
        <p className='error'>O campo "{field}" não pode estar vazio</p>
    )
}