import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useTask } from '../../context/TaskContext'
import sort from '../../utils/sort';


export default function Tasks() {
    const { tasks, editingTask, filter, setFilter } = useTask();
    const [sortConfig, setSortConfig] = useState({ key: 'description', direction: 'asc' });


    const sortedTasks = sort(tasks, sortConfig.key, sortConfig.direction);

    const filteredTasks = sortedTasks.filter((task) => {
        return task.description.toLowerCase().includes(filter.toLowerCase())
    })

    const changeDirection = () => {
        setSortConfig((prevConfig => {
            const newDirection = prevConfig.direction === 'asc' ? 'desc' : 'asc';
            return { ...prevConfig, direction: newDirection };
        }))
    }

    return (
        <section>
            <h1>Tarefas</h1>
            <div>
                <input
                    placeholder='Filtrar por...'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <select
                    onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
                >
                    <option value='description'>Descriçao</option>
                    <option value='date'>Data de criação</option>
                    <option value='status'>Status</option>
                </select>
                <i
                    onClick={changeDirection}
                    class={
                        `bi bi-sort-${sortConfig.direction === 'asc' ?
                            'alpha-down' : 'alpha-up-alt'}`
                    }
                />
            </div>
            <table>
                {editingTask ? (
                    <EditTask />
                ) : (
                    <AddTask />
                )}
                {filteredTasks.map(task => (
                    <Task task={task} />
                ))}
            </table>
        </section>
    )
}