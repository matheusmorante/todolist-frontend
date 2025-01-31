import React, { useState,  useEffect } from 'react';
import Task from './Task';

export default function Tasks() {
    const [ tasks, setTasks ] = useState('');
    return (
        <section>
            <h1>Tarefas</h1>
            <div></div>
            <table>
                { tasks.map(task => <Task />) }
            </table>
        </section>
    )
}