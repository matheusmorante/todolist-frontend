import React, { useState } from 'react';
import taskService from '../../services/taskService'

export default function AddTask({ fetchTasks }) {
    const [ description, setDescription ] = useState('');

    const submit = async () => {
        await taskService.addTask(description);
        fetchTasks()
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