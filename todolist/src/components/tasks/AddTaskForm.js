import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import { descriptionError } from '../../utils/validations';

export default function AddTask() {
    const { addTask, setError} = useTask();
    const [description, setDescription] = useState('');

    const submit = async e => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            description: description,
            done: false,
        };
        const error = descriptionError(description);
       
        if(error) {
             setError(error);
             setTimeout(() => setError(null), 3000);
             return false
        }

        addTask(newTask);
        setDescription('');
        setError('')
    }

    return (
        <form id='add-task-form' className='form' onSubmit={submit}>
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <button type='submit'><i className="bi bi-plus-lg" /></button>
            
        </form>
    )
}