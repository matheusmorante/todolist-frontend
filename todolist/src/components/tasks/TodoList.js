import Task from './Task';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import { useTask } from '../../context/TaskContext'
import TasksPagination from './TasksPagination';
import TasksToolbar from './TasksToolbar';
import Error from '../Error'
import Success from '../Success';

export default function Todolist() {
    const { editingTask, paginatedTasks, error, success } = useTask();

    return (
        <section>
            <h1>Tarefas</h1>

            {error && <Error errorText={error} />}
            {success && <Success successText={success} />}

            {editingTask ? (
                <EditTaskForm />
            ) : (
                <AddTaskForm />
            )}

            <TasksToolbar />

            <ul id='todolist'>
                {paginatedTasks.map(task => (
                    <Task task={task} />
                ))}
            </ul>
            <TasksPagination />
        </section>
    )
}