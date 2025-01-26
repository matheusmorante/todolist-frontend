import api from './api';

const userService = {
    getUserById: async (id) => {
        try {
            const response = await api.get(`/users/${id}`);
            return response.data; 
        } catch (e) {
            throw e.response?.data?.error || 'Erro ao buscar usuário.';
        }
    }
};

export default userService;