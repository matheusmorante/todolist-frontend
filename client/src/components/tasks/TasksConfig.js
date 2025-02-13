import React, { useState, useEffect } from 'react';
import { useTask } from '../../context/TaskContext';
import sort from '../../utils/sort';
import { handleTasks } from '../../utils/handleTasks';

export default function TasksConfig() {
    const {
        tasks, setTasksHandled, filter, setFilter,
        setTaskPerPage, sortConfig, setSortConfig
    } = useTask();


    useEffect(() => {
        setTasksHandled(handleTasks(tasks, filter, sortConfig));
    }, [tasks, filter, sortConfig]);

    const changeDirection = () => {
        setSortConfig((prevConfig => {
            const newDirection = prevConfig.direction === 'asc' ? 'desc' : 'asc';
            return { ...prevConfig, direction: newDirection };
        }))
    }

    return (
        <div>
            <select onChange={(e) => setTaskPerPage(e.target.value)}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='20' selected>20</option>
                <option value='50'>50</option>
            </select>
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
    )
}