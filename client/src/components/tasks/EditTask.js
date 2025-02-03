import React, { useState } from 'react';
import taskService from '../../services/taskService';

export default function EditTask({ task, setCurrentForm }) {
    const [ description, setDescription ] = useState('');

    const submit = () => {
        taskService.updateTask(task.date, description, task.status, task.id);
        setDescription('');
        setCurrentForm('add')
    }

    const cancel = () => {
        setDescription('');
        setCurrentForm('add');
    }

    return (
        <tr>
            <td>
                <input value={description} onChange={ e => setDescription(e.target.value) }/>
            </td>
            <td>
                <a onClick={submit} className='bi bi-check-2'/>
                <a onClick={cancel} className='bi bi-x-lg'/>
            </td>
        </tr>
    )
}