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

            const isMatch = await verifyPassword(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ Error: 'Senha incorreta' });
            }

            res.status(200).json({ message: 'Login bem-sucedido' });
        } catch (e) {
            console.error('Erro ao registrar usuário:', e);
            res.status(500).json({ error: 'Erro ao registrar usuário' })
        }
    },

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const existingUser = await userModel.getUserByEmail(email);


            const hashedPassword = await hashPassword(password);

            const newUser = await userModel.addUser(name, email, hashedPassword);
            res.status(201).json({ message: 'Usuário registrado com sucesso:', newUser });
        } catch (e) {
            console.error('Erro ao registrar usuário:', e);
            res.status(500).json({ error: 'Erro ao registrar usuário' })
        }
    },
}

module.exports = authController;
