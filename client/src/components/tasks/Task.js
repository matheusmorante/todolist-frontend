import React, {  useState } from 'react';
import taskService from '../../services/taskService';

export default function Task({ task, setShowCurrentForm }) {
    const toogleStatus = () => {
        const newStatus = task.status === 'done' ? 'active' : 'done';

       taskService.updateTask(task.date, task.description, newStatus, task.id)
    }

    return (
        <tr>
            <td><i onClick={toogleStatus} className="bi bi-check"/></td>
            <td>{ task.description } - { task.date }</td>
            <td>
                <i onClick={() => setShowCurrentForm('edit')} class="bi bi-pencil"/>
                <i class="bi bi-trash3"/>
            </td>

        </tr>
        
    )
}
