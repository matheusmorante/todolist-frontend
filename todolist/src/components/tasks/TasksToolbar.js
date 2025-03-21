import { useTask } from '../../context/TaskContext';

export default function TasksToolbar() {
    const {
        filter, setFilter, setTasksPerPage,
        sortConfig, setSortConfig
    } = useTask();

    const changeDirection = () => {
        setSortConfig((prevConfig => {
            const newDirection = prevConfig.direction === 'asc' ? 'desc' : 'asc';
            return { ...prevConfig, direction: newDirection };
        }))
    }

    return (
        <div id='tasks-toolbar'>
            <span>
                Mostrar
                <select onChange={(e) => setTasksPerPage(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20' selected>20</option>
                    <option value='50'>50</option>
                </select>
                tarefas por pagina
            </span>
            <span>
                Filtrar por
                <input
                    placeholder='Filtrar por...'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </span>
            <span>
                Ordenação:
                <select
                    onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
                >
                    <option value='description'>Descriçao</option>
                    <option value='date'>Data de criação</option>
                    <option value='status'>Status</option>
                </select>
                <i
                    onClick={changeDirection}
                    class={
                        `bi bi-sort-${sortConfig.direction === 'asc' ?
                            'alpha-down' : 'alpha-up-alt'}`
                    }
                />
            </span>

        </div>
    )
}