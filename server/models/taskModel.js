const pool = require('./db');

const taskModel = {
    addTask: async (userId, date, description) => {
        try {
            const result = await pool.query(
                `INSERT INTO tasks(user_id, date, description, status) 
                VALUES ($1, $2, $3, $4)
                RETURNING *`,
                [userId, date, description, 'active']
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    updateTask: async (date, description, status, id) => {
        try {
            const result = await pool.query(
                `UPDATE tasks SET date = $1, description = $2, status = $3 
                WHERE id = $4
                RETURNING *`,
                [date, description, status, id]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    deleteTask: async (id) => {
        try {
            const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            throw error;
        }
    },

    getTasksByUserId: async (userId) => {
        try {
            const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = taskModel;