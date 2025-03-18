import React from 'react';
import taskService from '../../services/taskService';
import { useTask } from '../../context/TaskContext';

export default function Task({ task }) {
    const { setEditingTask, fetchTasks } = useTask();

    const toogleStatus = async () => {
        const newStatus = task.status === 'done' ? 'active' : 'done';
        await taskService.updateTask(task.date, task.description, newStatus, task.id);
        fetchTasks();
    }

    const deleteTask = async () => {
        await taskService.deleteTask(task.id);
        fetchTasks();
    }

    return (
        <li className={task.status === 'done' ? 'done' : ''}>
            <div id='check'>
                <i onClick={toogleStatus} className="bi bi-check" />
            </div>
            <div id='text-container'>
                <div id='description'>{task.description}</div>
                <div id='date'>{task.date}</div>
            </div>
            <div id='actions'>
                <i onClick={() => setEditingTask(task)} className="bi bi-pencil" />
                <i onClick={deleteTask} className="bi bi-trash3" />
            </div>
        </li>

    )
}
