import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useTask } from '../../context/TaskContext'
import TasksConfig from './tasksConfig';


export default function Tasks() {
    const {tasksHandled, editingTask } = useTask();

    return (
        <section>
            <h1>Tarefas</h1>
           
           <TasksConfig />
            <table>
                {editingTask ? (
                    <EditTask />
                ) : (
                    <AddTask />
                )}
                {tasksHandled.map(task => (
                    <Task task={task} />
                ))}
            </table>
        </section>
    )
}