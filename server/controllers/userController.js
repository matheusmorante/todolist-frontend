const userModel = require('../models/userModel');

const userController = {

    getSessionUser: async (req, res, next) => {
        try {
            if (req.session.user) {
                return res.status(200).json(req.session.user);
            }
            res.status(401).json({ message: 'Usuário não autenticado' });
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

    changeUsername: async (req, res, next) => {
        try {
            const { newUsername, password, id } = req.body;

            const user = await userModel.getUserById(id);
            const storedPassword = user.password;

            const existingUsername = userModel.getUserByNameOrEmail(newUSername);

            if(existingUsername) {
                res.status(409).json({ message: 'Esse nome de usuário ja está em uso'})
            }

            const isMatch = await verifyPassword(password, storedPassword);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            await userModel.updateUser(newUsername, user.email, user.password, user.id);
            res.status(200).json({ message: 'Nome do usuário alterado' });
        } catch (error) {
            next(error)
        }
    },

    changeEmail: async (req, res, next) => {
        try {
            const { newEmail, password, id } = req.body;

            const user = await userModel.getUserById(id);
            const storedPassword = user.password;

            const existingEmail = userModel.getUserByNameOrEmail(newEmail);

            if(existingEmail) {
                res.status(409).json({ message: 'Esse email ja está em uso'})
            }

            const isMatch = await verifyPassword(password, storedPassword);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            await userModel.updateUser(user.name, newEmail, user.password, user.id);
            res.status(200).json({ message: 'Email alterado com sucesso' });
        } catch (error) {
            next(error)
        }
    },

    changePassword: async (req, res, next) => {
        try {
            const { currentPassword, newPassword, id } = req.body;

            const user = await userModel.getUserById(id);
            const storedPassword = user.password;

            const isMatch = await verifyPassword(currentPassword, storedPassword);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            await userModel.updateUser(user.name, user.email, newPassword, user.id);
            res.status(200).json({ message: 'Senha alterada com sucesso.' });
        } catch (error) {
            next(error)
        }
    }
};

module.exports = userController;