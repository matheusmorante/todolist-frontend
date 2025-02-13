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
        <tr className={task.status === 'done' ? 'task-done' : ''}>
            <td><i onClick={toogleStatus} className="bi bi-check" /></td>
            <td>{task.description}</td>
            <td>{task.date}</td>
            <td>
                <i onClick={() => setEditingTask(task)} className="bi bi-pencil" />
                <i onClick={deleteTask} className="bi bi-trash3" />
            </td>
        </tr>

    )
}
