const pool = require('./db');

const userModel = {
    addUser: async (name, email, password) => {
        const result = await pool.query(
            'INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        return result.rows[0]
    },

    updateUser: async (name, email, password, id) => {
        const result = await pool.query(
            'UPDATE users SET name = $1, email, $2 password = $3 WHERE id = $4 RETURNING *',
            [name, email, password, id]
        );
        return result.rows[0];
    },

    deleteUser: async (id) => {
        const result = pool.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rowCount > 0;
    },

    getUserById: async (id) => {
        const result = pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    },

    getUserByEmail: async (email) => {
        const result = pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    },

    getAllUsers: async () => {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }
}

module.exports = userModel;