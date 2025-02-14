import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useTask } from '../../context/TaskContext'
import TasksPagination from './TasksPagination';
import TasksToolBar from './TasksToolBar';


export default function Tasks() {
    const {editingTask, paginatedTasks} = useTask();

    

    return (
        <section>
            <h1>Tarefas</h1>
           
           <TasksToolBar />
            <table>
                {editingTask ? (
                    <EditTask />
                ) : (
                    <AddTask />
                )}
                {paginatedTasks.map(task => (
                    <Task task={task} />
                ))}
            </table>
            <TasksPagination/>
        </section>
    )
}