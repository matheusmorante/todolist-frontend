import { useState, useEffect } from 'react';
import { useTask } from '../../context/TaskContext';
import ReactPaginate from "react-paginate";

export default function TasksPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const { tasks, tasksHandled, tasksPerPage, setTasks } = useTask();

    useEffect(() => {
        setTasks(
            tasks.slice(offset, offset + tasksPerPage)
        );
    }, [setTasks, tasksPerPage]);

    const offset = (currentPage - 1) * tasksPerPage;

    const pageCount = Math.ceil(tasksHandled.length / tasksPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <ReactPaginate
            previousLabel={"← Anterior"}
            nextLabel={"Próximo →"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    )

}