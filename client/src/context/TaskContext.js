import { createContext, useContext, useState, useEffect, } from "react";
import { handleTasks } from "../utils/handleTasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'description', direction: 'asc' });
    const [editingTask, setEditingTask] = useState(null);
    const [tasksPerPage, setTasksPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTasks, setPaginatedTasks] = useState([])

    useEffect(() => {
        try {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (error) {
          console.error("Erro ao salvar tarefas:", error);
        }
      }, [tasks]);

    useEffect(() => {
        let filteredTasks = tasks;
        if (filter) {
            filteredTasks = handleTasks(tasks, filter, sortConfig);
        }
        const lastTaskOfPage = currentPage * tasksPerPage;
        const firstTaskOfPage = lastTaskOfPage - tasksPerPage;
        const currentPagedTasks = filteredTasks.slice(firstTaskOfPage, lastTaskOfPage);
        setPaginatedTasks(currentPagedTasks)
    }, [tasks, filter, sortConfig, currentPage, tasksPerPage]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                filter,
                setFilter,
                sortConfig,
                setSortConfig,
                editingTask,
                setEditingTask,
                tasksPerPage,
                setTasksPerPage,
                currentPage,
                setCurrentPage,
                paginatedTasks,
                addTask,
                editTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}