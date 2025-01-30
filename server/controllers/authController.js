const userModel = require('../models/userModel');
const { hashPassword, verifyPassword } = require('../utils/bcryptUtils');

const authController = {
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

           

            res.status(201).json({ message: 'Login bem-sucedido' });
        } catch (e) {
            console.error('Erro ao registrar usuário:', e);
            res.status(500).json({ error: 'Erro ao registrar usuário' })
        }
    },

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const existingUser = await userModel.getUserByNameOrEmail(name) ||
                                    await userModel.getUserByNameOrEmail(email);

            if(existingUser) {
                return res.status(409).json({ message: 'O nome de usuário/email já estão em uso' });
            }
       
            const hashedPassword = await hashPassword(password);

            await userModel.addUser(name, email, hashedPassword);
            res.status(201).json({
                message: 'Usuário registrado com sucesso!'
            });
        } catch (e) {
            console.error('Erro ao registrar usuário:', e);
            res.status(500).json({ error: 'Erro ao registrar usuário' })
        }
    },
}

module.exports = authController;
