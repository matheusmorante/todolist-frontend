const pool = require('./db');

const taskModel = {
    addTask: async (date, description, status) => {
        try {
            const result = pool.query(
                `INSERT INTO tasks(userId, date, description) 
                VALUES ($1, $2, $3)
                RETURNING *`,
                [userId, date, description]
            );

            return result.rows[0];
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            throw error;
        }
    },

    updateTask: async (date, description, status, id) => {
        try {
            const result = pool.query(
                'UPDATE tasks SET date = $1, description = $2, status = $3 WHERE id = $4',
                [date, description, status, id]
            );

            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            throw error;
        }
    },

    deleteTask: async (id) => {
        try {
            const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            console.error('Erro ao deletar todas as tarefas:', error);
            throw error;
        }
    },

    getAllTasks: async () => {
        try {
            const result = await pool.query('SELECT * FROM tasks');
            return result.rows;
        } catch (error) {
            console.error('Erro ao buscar todos as tarefas:', error);
            throw error;
        }
    },

    getTasksByUserId: async (userId) => {
        try {
            const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
            return result.rows;
        } catch (error) {
            console.error('Erro ao buscar tarefas por id:', error);
            throw error;
        }
    }
};

module.exports = taskModel;