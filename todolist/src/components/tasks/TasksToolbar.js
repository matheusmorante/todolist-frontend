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
            <div>
                Mostrar
                <select onChange={(e) => setTasksPerPage(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='10' selected>10</option>
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                </select>
                tarefas por pagina
            </div>
            <div>
                Filtrar por
                <input
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div>
                Ordenação:
                <select
                    onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
                >
                    <option value='id' selected>Data de criação</option>
                    <option value='description'>Descriçao</option>
                    <option value='done'>Status</option>
                </select>
                <i
                    onClick={changeDirection}
                    class={
                        `bi bi-sort-${sortConfig.direction === 'asc' ?
                            'alpha-down' : 'alpha-up-alt'}`
                    }
                />
            </div>

        </div>
    )
}