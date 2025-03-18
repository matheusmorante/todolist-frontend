import { useTask } from '../../context/TaskContext';


export default function TasksPagination() {
    const { tasks, tasksPerPage, currentPage, setCurrentPage } = useTask();

    const totalPages = Math.ceil(tasks.length / tasksPerPage);
    return (
        <div id='tasks-pagination'>
            <div onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                Anterior
            </div>
            <div>{currentPage + '/' + totalPages}</div>
            <div onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                Próximo
            </div>
        </div>
    )

}