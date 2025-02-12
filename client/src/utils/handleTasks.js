export const handleTasks = (tasks, filter, sortConfig) => {
    return tasks
        .filter(task => task.description.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => {
            if (sortConfig.direction === 'asc') {
                return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
            } else {
                return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
            }
        });
}
