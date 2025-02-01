const sessionController = {
    getSessionUser: async (req, res) => {
        try {
            if (req.session.user) {
                return res.status(200).json(req.session.user);
            }
            res.status(401).json({ message: 'Usuário não autenticado' });
        } catch (e) {
            console.error('Erro ao obter ID do usuário:', e);
            res.status(500).json({ error: 'Erro interno no servidor' });
        }
        
    },
}

module.exports = sessionController;
