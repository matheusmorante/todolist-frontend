import React, { useContext, useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import taskService from '../../services/taskService'

export default function AddTask() {
    const { fetchTasks } = useTasks();
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
            <td>
                <a className='bi bi-check' onClick={submit} />
            </td>
        </tr>
    )
}