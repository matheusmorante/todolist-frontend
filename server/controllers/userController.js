const userModel = require('../models/userModel');

const userController = {
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedUser = userModel.updateUser(name, email, password, id);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.next(error)
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
            res.next(error)
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = userModel.getUser(id);
            res.status(200).json(user);
        } catch (error) {
            res.next(error)
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = userModel.getAllUsers();
            res.status(200).json(users)
        } catch (error) {
            res.next(error)
        }
    }
};

module.exports = userController;