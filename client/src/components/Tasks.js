import React, { useState,  useEffect } from 'react';
import Task from './Task';

export default function Tasks() {
    const [ tasks, setTasks ] = useState([]);
    return (
        <section>
            <h1>Tarefas</h1>
            <div>
                <input placeholder='Filtrar por...'/>
                <i class="bi bi-sort-alpha-down"/>
            </div>
            <table>
                { tasks.map(task => <Task  task={ task }/>) }
            </table>
        </section>
    )
}