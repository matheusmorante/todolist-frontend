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
            console.error('Erro ao adicionar usuário:', error);
            throw error;  // Rethrow the error to be handled by the caller
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
            console.error('Erro ao atualizar usuário:', error);
            throw error;
        }
    },

    deleteUser: async (id) => {
        try {
            const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            throw error;
        }
    },

    getUserById: async (id) => {
        try {
            const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            throw error;
        }
    },

    getUserByEmail: async (email) => {
        try {
            const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao buscar usuário por e-mail:', error);
            throw error;
        }
    },

    getAllUsers: async () => {
        try {
            const result = await pool.query('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
            throw error;
        }
    }
}

module.exports = userModel;