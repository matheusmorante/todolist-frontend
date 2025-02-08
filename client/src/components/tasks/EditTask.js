import React, { useState } from 'react';
import taskService from '../../services/taskService';
import { useTask } from '../../context/TaskContext'

export default function EditTask() {
    const { editingTask, setEditingTask, fetchTasks } = useTask();
    const [description, setDescription] = useState(editingTask?.description);

    const submit = async () => {
        await taskService.updateTask(
            editingTask.date, description, editingTask.status, editingTask.id
        );
        setEditingTask(null);
        fetchTasks();
    }

    const cancel = () => {
        setEditingTask(null);
    }

    return (
        <tr>
            <td colSpan={2}>
                <input value={description} onChange={e => setDescription(e.target.value)} />
            </td>
            <td></td>
            <td>
                <i onClick={submit} className='bi bi-check' />
                <i onClick={cancel} className='bi bi-x-lg' />
            </td>
        </tr>
    )
}