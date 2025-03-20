import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext'

export default function EditTaskForm() {
    const { editingTask, setEditingTask, editTask} = useTask();
    const [description, setDescription] = useState(editingTask?.description);

    const submit = async () => {
        const newTask = {
            id: editingTask.id,
            description: description,
            done: editingTask.done,
        };

        editTask(newTask);

        setDescription('');
    }

    const cancel = () => {
        setEditingTask(null);
    }

    return (
        <form>
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <i onClick={submit} className='bi bi-check' />
            <i onClick={cancel} className='bi bi-x-lg' />
        </form>
    )
}