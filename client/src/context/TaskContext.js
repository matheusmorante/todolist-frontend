import { createContext, useContext, useState, useEffect, useCallback } from "react";
import taskService from '../services/taskService';
import { useAuth } from "../context/AuthContext";
import { handleTasks } from '../../utils/handleTasks';


export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'description', direction: 'asc' });
    const [editingTask, setEditingTask] = useState(null);
    const [taskPerPage, setTaskPerPage] = useState('20');
    const [currentTasks, setCurrentPage] = useState([]);
    const { user } = useAuth();

    const fetchTasks = useCallback(async () => {
        const data = await taskService.getTasksByUserId(user.id);
        if (data) {
            const tasksHandled = handleTasks(data, filter, sortConfig);
            setTasks(tasksHandled);
        }

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
                    tasks, fetchTasks, tasksHandled, setTasksHandled, editingTask,
                    setEditingTask, filter, setFilter, sortConfig, setSortConfig,
                    taskPerPage, setTaskPerPage, currentTasks, setCurrentPage
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