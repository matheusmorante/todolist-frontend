const userModel = require('../models/userModel');

const userController = {
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedUser = userModel.updateUser(name, email, password, id);
            res.status(200).json(updatedUser);
        } catch (e) {
            console.error('Erro ao editar usuário:', e);
            res.status(500).json({ error: 'Erro ao editar usuário'});
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await userModel.deleteUserById(id);
    
            if (deletedUser) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = userModel.getUser(id);
            res.status(200).json(user);
        } catch (e) {
            console.error('Erro ao buscar usuário: ', e);
            res.status(500).json({ error: 'Erro ao buscar usua´rio'});
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = userModel.getAllUsers();
            res.status(200).json(users)
        } catch (e) {
            console.error('Erro ao buscar todos os usuários:', e);
            res.status(500).json({ error: 'Erro ao buscar todos os usuários'});
        }
    }
};

module.exports = userController;