import React, { useState } from 'react';
import taskService from '../../services/taskService';
import { useTasks } from '../../context/TaskContext'

export default function EditTask() {
    const { editingTask, setEditingTask, fetchTasks } = useTasks();
    const [description, setDescription] = useState(editingTask?.description);

    const submit = async () => {
        await taskService.updateTask(editingTask.date, description, editingTask.status, editingTask.id);
        setEditingTask(null);
        fetchTasks();
    }

    const cancel = () => {
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