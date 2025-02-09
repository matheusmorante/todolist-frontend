const userModel = require('../models/userModel');
const { hashPassword, verifyPassword } = require('../utils/bcryptUtils');

const authController = {
    getUser: async (req, res, next) => {
        try {
            if (req.session.user) {
                return res.status(200).json(req.session.user);
            }
            res.status(401).json({ message: 'Usuário não autenticado' });
        } catch (error) {
            next(error)
        }
    },

    login: async (req, res) => {
        try {
            const { login, password } = req.body;

            if (!login || !password) {
                return res.status(400).json({ message: 'O nome do usuário/email e senha são obrigatórios.' });
            }

            const user = await userModel.getUserByNameOrEmail(login);

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const isMatch = await verifyPassword(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            req.session.user = { id: user.id, name: user.name, email: user.email };

            res.status(201).json({ message: 'Login bem-sucedido' });
        } catch (error) {
            next(error)
        }
    },

    logout: async (req, res, next) => {
        try {
            req.session.destroy(() => {
                res.clearCookie("connect.sid");
                return res.status(200).json({ message: "Logout realizado com sucesso" });
            });
        } catch (error) {
            next(error);
        }
    },

    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;

            const existingUser = await userModel.getUserByNameOrEmail(name) ||
                await userModel.getUserByNameOrEmail(email);

            if (existingUser) {
                return res.status(409).json({ message: 'O nome de usuário/email já estão em uso' });
            }

            const hashedPassword = await hashPassword(password);

            await userModel.addUser(name, email, hashedPassword);
            res.status(201).json({ message: 'Usuário registrado com sucesso!' });
        } catch (error) {
            next(error)
        }
    },

    changeUsername: async (req, res, next) => {
        try {
            const { newUsername, password, id } = req.body;

            const user = await userModel.getUserById(id);
            const storedPassword = user.password;

            const isMatch = await verifyPassword(password, storedPassword);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            await userModel.updateUser(newUsername, user.email, user.password, user.id);
            res.status(200).json({ message: 'Não foi possivel alterar nome do usuário.' });
        } catch (error) {
            next(error)
        }
    },

    changeEmail: async (req, res, next) => {
        try {
            const { newEmail, password, id } = req.body;

            const user = await userModel.getUserById(id);
            const storedPassword = user.password;

            const isMatch = await verifyPassword(password, storedPassword);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            await userModel.updateUser(user.name, newEmail, user.password, user.id);
            res.status(200).json({ message: 'Não foi possivel alterar email.' });
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
            res.status(200).json({ message: 'Não foi possivel alterar a senha.' });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController;
