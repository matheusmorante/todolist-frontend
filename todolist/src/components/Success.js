import React from 'react';

export default function Success({successText}) {
    return (
        <p className='success alert'>{successText}</p>
    )
}