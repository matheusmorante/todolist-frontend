import React, { useState, useEffect } from 'react';
import taskService from '../../services/taskService'

export default function addTask() {
    const [description, setDescription] = useState('');

    const submit = async () => {
        const data = { date, description }
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