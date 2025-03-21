import React from 'react';
import { useTask } from '../../context/TaskContext';
import dateNow from '../../utils/dateNow';

export default function Task({ task }) {
    const { setEditingTask, editTask, deleteTask } = useTask();

    const toogleStatus = async () => {
        const newTask = {
            id: task.id,
            description: task.description,
            done: !task.done,
        };

        editTask(newTask);
    }

    const onDeleteTask = async () => {
        deleteTask(task.id)
    }

    return (
        <li className={task.done === true ? 'done' : ''}>
            <div id='check'>
                <i onClick={toogleStatus} className={task.done === true ? 'bi bi-check-square' : 'bi bi-square'} />
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
