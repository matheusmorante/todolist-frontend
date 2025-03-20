import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';

export default function AddTask() {
    const { addTask } = useTask();
    const [description, setDescription] = useState('');

    const submit = async () => {
        const newTask = {
            id: Date.now(),
            description: description,
            done: false,
        };

        addTask(newTask);

        setDescription('');
    }

    return (
        <form id='add-task-form'>
            <input value={description} onChange={ e => setDescription(e.target.value)} />
            <button type="submit" onClick={submit}>
                <i className="bi bi-plus" />
            </button>

        </form>
    )
}