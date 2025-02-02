import React, { useState, useEffect } from 'react';
import Task from './Task';
import taskService from '../../services/taskService'
import AddTask from './addTask';

export default function Tasks({ userId }) {
    const [ tasks, setTasks ] = useState([]);
    const [ filter, setFilter ] = useState('');

    useEffect(() => {
        const getAllTasks = async () => {
            const data = await taskService.getTasksByUserId(userId);
            if(data) {
                setTasks(data)
            } else {
                setTasks([])
            }
        }
        getAllTasks()
    }, [])

    return (
        <section>
            <h1>Tarefas</h1>
            <div>
                <input
                    placeholder='Filtrar por...' 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                />
                <i class="bi bi-sort-alpha-down"/>
            </div>
            <table>
                <AddTask />
                { tasks.map(task => <Task task={ task }/>) }
            </table>
        </section>
    )
}