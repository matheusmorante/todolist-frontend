const userModel = require('../models/userModel');
const { hashPassword, verifyPassword } = require('../utils/bcryptUtils');

const authController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await userModel.getUserByEmail(email);
            if (!user) {
                return res.status(400).json({ message: 'Usuário não encontrado' });
            }

            const isMatch = verifyPassword(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Senha incorreta' });
            }

            res.status(200).json({ message: 'Login bem-sucedido' });
        } catch (e) {
            console.error('Erro ao criar usuário:', e);
            res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    },

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const existingUser = await userModel.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: 'Email já está em uso' });
            }

            const hashedPassword = hashPassword(password);

            const newUser = await userModel.addUser(name, email, hashedPassword);
            res.status(201).json(newUser);
        } catch (e) {
            console.error('Erro ao criar usuário:', e);
            res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    },
}

module.exports = authController;
