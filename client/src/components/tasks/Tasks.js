
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useTask } from '../../context/TaskContext'
import TasksPagination from './TasksPagination';
import TasksToolbar from './TasksToolbar';


export default function Tasks() {
    const {editingTask, paginatedTasks} = useTask();

    return (
        <section id='tasks-section'>
            <h1>Tarefas</h1>

            {editingTask ? (
                    <EditTask />
                ) : (
                    <AddTask />
                )}
           
           <TasksToolbar />
          
            <ul id='task-list'>
                {paginatedTasks.map(task => (
                    <Task task={task} />
                ))}
            </ul>
            <TasksPagination/>
        </section>
    )
}