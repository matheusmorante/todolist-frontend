import React, { useState, useEffect, useCallback } from 'react';
import Task from './Task';
import taskService from '../../services/taskService'
import AddTask from './AddTask';
import EditTask from './EditTask';

export default function Tasks({ userId }) {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('');
    const [editingTask, setEditingTask] = useState(null);

    const fetchTasks = useCallback(async () => {
        if (!userId) return;
        const data = await taskService.getTasksByUserId(userId);
        setTasks(data || []);
    }, [userId]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <section>
            <h1>Tarefas</h1>
            <div>
                <input
                    placeholder='Filtrar por...'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <i class="bi bi-sort-alpha-down" />
            </div>
            <table>
                {editingTask ? (
                    <EditTask
                        editingTask={editingTask}
                        setEditingTask={setEditingTask}
                        fetchTasks={fetchTasks}
                    />
                ) : (
                    <AddTask fetchTasks={fetchTasks} />
                )}
                {tasks.map(task => <Task task={task} setEditingTask={setEditingTask} />)}
            </table>
        </section>
    )
}