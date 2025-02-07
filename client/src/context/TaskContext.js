import { createContext, useContext, useState, useEffect, useCallback } from "react";
import taskService from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children, userId }) => {
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
        <TaskContext.Provider 
            value={{ tasks, fetchTasks, editingTask, setEditingTask, filter, setFilter }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}