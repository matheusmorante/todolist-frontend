import { createContext, useContext, useState, useEffect, useCallback } from "react";
import taskService from '../services/taskService';
import { useAuth } from "../context/AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [tasksHandled, setTasksHandled] = useState([]);
    const [filter, setFilter] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const { user } = useAuth();

    const fetchTasks = useCallback(async () => {
        const data = await taskService.getTasksByUserId(user.id);
        setTasks(data || []);
    }, [user.id]);

    useEffect(() => {
        if (user.id) {
            fetchTasks();
        }
    }, [fetchTasks, user.id]);

    return (
        <TaskContext.Provider
            value={
                {
                    tasks,
                    fetchTasks,
                    tasksHandled,
                    setTasksHandled,
                    editingTask,
                    setEditingTask,
                    filter,
                    setFilter
                }
            }
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}