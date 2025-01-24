import api from './api';

const userService = {
    addUser: async (data) => {
        try {
            const response = await api.post('/users/add', data);
            return response.data;
        } catch (e) {
            throw 'Erro ao registrar usuário.';
        }
    },

    getUser: async (id) => {
        try {
            const response = await api.get(`/users/${id}`);
            return response.data; 
        } catch (error) {
            throw error.response?.data?.error || 'Erro ao buscar usuário.';
        }
    }
};

export default userService;