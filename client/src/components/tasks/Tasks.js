import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useTask } from '../../context/TaskContext'
import TasksConfig from './tasksConfig';
import TasksPagination from './TasksPagination';


export default function Tasks() {
    const {tasks, editingTask, pageTasks, currentPage, tasksPerPage} = useTask();

    

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
                {tasks.map(task => (
                    <Task task={task} />
                ))}
            </table>
            <TasksPagination/>
        </section>
    )
}