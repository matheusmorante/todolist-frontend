
import Task from './Task';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useTask } from '../../context/TaskContext'
import TasksPagination from './TasksPagination';
import TasksToolbar from './TasksToolbar';


export default function Tasks() {
    const {editingTask, paginatedTasks} = useTask();

    

    return (
        <section>
            <h1>Tarefas</h1>
           
           <TasksToolbar />
            <table id='tasks-table'>
                {editingTask ? (
                    <EditTask />
                ) : (
                    <AddTask />
                )}
                {paginatedTasks.map(task => (
                    <Task task={task} />
                ))}
            </table>
            <TasksPagination/>
        </section>
    )
}