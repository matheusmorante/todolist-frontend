import React, { useState,  useEffect } from 'react';
import Task from './Task';
import taskService from '../../services/taskService'

export default function Tasks() {
    const [ tasks, setTasks ] = useState([]);
    const [ filter, setFilter ] = useState('');

    useEffect(() => {
        const getAllTasks = async () => {
            const tasksData = await taskService.getAllTasks();
            if(tasksData) {
                setTasks(tasksData)
            }
        }
        getAllTasks()
    })

  
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
                <tr>
                    <td>
                        <input/>
                    </td>
                    <td><a className='bi bi-check' onClick={submit}/></td>
                </tr>
                { tasks.map(task => <Task  task={ task }/>) }
            </table>
        </section>
    )
}