const userModel = require('../models/userModel');

const userController = {
    updateUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedUser = userModel.updateUser(name, email, password, id);
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error)
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedUser = await userModel.deleteUserById(id);
    
            if (deletedUser) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            next(error)
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = userModel.getUser(id);
            res.status(200).json(user);
        } catch (error) {
            next(error)
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const users = userModel.getAllUsers();
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }
};

module.exports = userController;