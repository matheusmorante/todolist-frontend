import React from 'react';

export default function Error({errorText}) {
    return (
        <p className='error alert'>{errorText}</p>
    )
}