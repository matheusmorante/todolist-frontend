const pool = require('./db');
const userModel = {
    addUser: async (name, password) => {
        const result = await pool.query(
            'INSERT INTO users(name, password) VALUES ($1, $2)',
            [name, password]
        );

        return result.rows[0]
    },

    updateUser: async (name, password, id) => {
        const result = await pool.query(
            'UPDATE users SET name = $1, password = $2 WHERE id = $3',
            [name, password, id]
        );

        return result.rows[0];
    },

    deleteUser: async (id) => {
        const result = pool.query(
            'DELETE FROM users WHERE id = $1',
            [id]
        );
        return result.rowCount > 0;
    },

    getAllUsers: async () => {
        const result = await pool.query(
            'SELECT * FROM users'
        );

        return result.rows;
    }

}

module.exports = userModel;