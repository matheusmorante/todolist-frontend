const sessionController = {
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
}

module.exports = sessionController;
