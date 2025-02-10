const pool = require('./db');

const userModel = {
    addUser: async (name, email, password) => {
        try {
            const result = await pool.query(
                'INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *',
                [name, email, password]
            );
            return result.rows[0];
        } catch (error) {
            throw error;  
        }
    },

    updateUser: async (name, email, password, id) => {
        try {
            const result = await pool.query(
                'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
                [name, email, password, id]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (id) => {
        try {
            const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (id) => {
        try {
            const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    getUserByNameOrEmail: async (data) => {
        try {
            const result = await pool.query(
                'SELECT * FROM users WHERE name = $1 OR email = $1',
                 [data]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    getAllUsers: async () => {
        try {
            const result = await pool.query('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userModel;