import api from './api';

const userService = {
    getSessionUser: async () => {
        try {
            const response = await api.get('/users/session');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar usuário da sessao:', error);
            return null;
        }
    },

    getUserById: async (id) => {
        const response = await api.get(`/users/${id}`);
        return response.data;

    },

    getUserByEmail: async (email) => {
        const response = await api.get(`/users/${email}`);
        return response.data;

    },

    changeUsername: async (data) => {
       
        try {            
            const response = await api.put(`/users/update/${data.id}/username`, data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel mudar nome de usuário');
            console.error(e);
            return false
        }
    },

    changeEmail: async (data) => {
        try {
            const response = await api.put(`/users/update/${data.id}/email`, data);
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel mudar email');
            return false
        }
    },

    changePassword: async (data) => {
        try {
            const response = await api.put(`/users/update/${data.id}/password`, data);
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel mudar a senha');
            return false
        }
    }
};

export default userService;