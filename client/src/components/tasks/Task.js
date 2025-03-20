import React from 'react';
import { useTask } from '../../context/TaskContext';
import dateNow from '../../utils/dateNow';

export default function Task({ task }) {
    const { setEditingTask, editTask, deleteTask } = useTask();

    const toogleStatus = async () => {
        const newStatus = !task.done;
        editTask(task.id, task.description, newStatus);
    }

    const onDeleteTask = async () => {
        deleteTask(task.id)
    }

    return (
        <li className={task.done === 'done' ? 'done' : ''}>
            <div id='check'>
                <i onClick={toogleStatus} className="bi bi-check" />
            </div>
            <div id='text-container'>
                <div id='description'>{task.description}</div>
                <div id='date'>{dateNow(task.id)}</div>
            </div>
            <div id='actions'>
                <i onClick={() => setEditingTask(task)} className="bi bi-pencil" />
                <i onClick={onDeleteTask} className="bi bi-trash3" />
            </div>
        </li>

    )
}
