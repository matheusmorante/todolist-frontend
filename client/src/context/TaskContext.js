import { createContext, useContext, useState, useEffect, useCallback } from "react";
import taskService from '../services/taskService';
import { useAuth } from "../context/AuthContext";
import { handleTasks } from '../utils/handleTasks';


export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'description', direction: 'asc' });
    const [editingTask, setEditingTask] = useState(null);
    const [tasksPerPage, setTasksPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const { user } = useAuth();

    const firstTaskOfPage = currentPage * tasksPerPage;
    const lastTaskOfPage = firstTaskOfPage + tasksPerPage;

    const fetchTasks = useCallback(async () => {
        const data = await taskService.getTasksByUserId(user.id);
        if (data) {
            const paginatedTasks = data.slice(firstTaskOfPage, lastTaskOfPage);
            const tasksHandled = handleTasks(paginatedTasks, filter, sortConfig);
            setTasks(tasksHandled);
            
        }
        
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
                    tasks, fetchTasks, editingTask, setEditingTask,
                    filter, setFilter, sortConfig, setSortConfig,
                    tasksPerPage, setTasksPerPage, currentPage, setCurrentPage
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