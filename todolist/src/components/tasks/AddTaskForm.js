import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import { descriptionError } from '../../utils/validations';

export default function AddTask() {
    const { addTask, setError} = useTask();
    const [description, setDescription] = useState('');

    const submit = async () => {
        const newTask = {
            id: Date.now(),
            description: description,
            done: false,
        };
        const error = descriptionError(description);
       
        if(error) {
             setError(error);
             return false
        }

        addTask(newTask);
        setDescription('');
        setError('')
    }

    return (
        <form id='add-task-form' className='form'>
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <i className="bi bi-plus" type="submit" onClick={submit} />
        </form>
    )
}