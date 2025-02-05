import React, { useState } from 'react';
import taskService from '../../services/taskService';

export default function EditTask({ fetchTasks,  editingTask, setEditingTask }) {
    const [description, setDescription] = useState(editingTask.description);

    const submit = async () => {
        await taskService.updateTask(editingTask.date, description, editingTask.status, editingTask.id);
        setDescription('');
        setEditingTask(null);
        fetchTasks();
    }

    const cancel = () => {
        setDescription('');
        setEditingTask(null);
    }

    return (
        <tr>
            <td>
                <input value={description} onChange={e => setDescription(e.target.value)} />
            </td>
            <td>
                <a onClick={submit} className='bi bi-check' />
                <a onClick={cancel} className='bi bi-x-lg' />
            </td>
        </tr>
    )
}