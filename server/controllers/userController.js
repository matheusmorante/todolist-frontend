const userModel = require('../models/userModel');

const userController = {
    addUser: async (req, res) => {
        try {
            const { name, password } = req.body;
            const newUser = await userModel.addUser(name, password);
            res.status(201).json(newUser);        
        } catch (e) {
            console.error('Erro ao criar usuário:', e);
            res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    },
};
module.exports = userController;