const pool = require('./db');

const taskModel = {
    addTask: async (date, description, status) => {
        const result = pool.query(
            'INSERT INTO tasks(userId, date, description, status) VALUES ($1, $2, $3, $4)',
            [userId, date, description, status]
        );

        return result.rows[0]
    },
    
    updateTask: async (date, description, status, id) => {
        const result = pool.query(
            'UPDATE tasks SET date = $1, description = $2, status = $3 WHERE id = $4',
            [date, description, status, id]
        );

        return result.rows[0];
    },

    deleteTask: async (id) => {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        return result.rowCount > 0;
    },

    getAllTasks: async () => {
        const result = await pool.query('SELECT * FROM tasks');
        return result.rows;
    }
};

module.exports = taskModel;