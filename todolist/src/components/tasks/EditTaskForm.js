import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import { descriptionError } from '../../utils/validations';

export default function EditTaskForm() {
    const { editingTask, setEditingTask, editTask, setError, setSuccess} = useTask();
    const [description, setDescription] = useState(editingTask?.description);

    const submit = async () => {
        const newTask = {
            id: editingTask.id,
            description: description,
            done: editingTask.done,
        };
        const error = descriptionError(description);

        if (error) {
            setError(error);
            setTimeout(() => setError(null), 3000);
            return false
        }
    
        editTask(newTask);
        setSuccess('Tarefa editada com sucesso!');
        setTimeout(() => setSuccess(null), 3000);

        setError(null);
        setDescription('');
        setEditingTask(null);
    }

    const cancel = () => {
        setEditingTask(null);
    }

    return (
        <form>
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <i onClick={submit} className='bi bi-check-lg' />
            <i onClick={cancel} className='bi bi-x-lg' />
        </form>
    )
}