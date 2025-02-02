import React, { useState } from 'react';
import taskService from '../../services/taskService'

export default function AddTask() {
    const [ description, setDescription ] = useState('');

    const submit = async () => {
        const data = { description }
        await taskService(data)
    }

    return (
        <tr>
            <td>
                <input value={description} onChange={e => setDescription(e.target.value)}/>
            </td>
            <td>
                <a className='bi bi-check' onClick={submit} />
            </td>
        </tr>
    )
}