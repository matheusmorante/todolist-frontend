import React, { useState } from 'react';
import taskService from '../../services/taskService';
import { useTasks } from '../../context/TaskContext';

export default function Task({ task }) {
    const { setEditingTask, fetchTasks } = useTasks();

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
            <td>{task.description} - {task.date}</td>
            <td>
                <i onClick={() => setEditingTask(task)} class="bi bi-pencil" />
                <i onClick={deleteTask} class="bi bi-trash3" />
            </td>
        </tr>

    )
}
