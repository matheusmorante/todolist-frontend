import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import taskService from '../../services/taskService'

export default function AddTask() {
    const { fetchTasks } = useTask();
    const [ description, setDescription ] = useState('');

    const submit = async () => {
        await taskService.addTask(description);
        setDescription('');
        fetchTasks()
    }

    return (
        <tr>
            <td colSpan={2}>
                <input value={description} onChange={e => setDescription(e.target.value)}/>
            </td>
            <td></td>
            <td>
                <i className='bi bi-plus' onClick={submit} />
            </td>
        </tr>
    )
}