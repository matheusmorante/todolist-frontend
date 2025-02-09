import api from "./api";

const authService = {
    getUser: async () => {
        try {
            const response = await api.get('/auth/user');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar usuário da sessao:', error);
            return null;
        }
    },

    login: async (data) => {
        try {
            const response = await api.post('/auth/login', data);
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel realizar login');
            return false;
        }
    },

    logout: async () => {
        try {
            const response = await api.post('/auth/logout');
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel realizar logout');
            return false;
        }
    },

    register: async (data) => {
        try {
            const response = await api.post('/auth/register', data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert(e.response.data.message);
            return false
        }
    },

    changeUsername: async (data) => {
        try {
            const response = await api.post('/auth/update/username', data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel mudar nome de usuário');
            return false
        }
    },


    changeEmail: async (data) => {
        try {
            const response = await api.post('/auth/update/email', data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel mudar email');
            return false
        }
    },

    changePassword: async (data) => {
        try {
            const response = await api.post('/auth/update/password', data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel mudar a senha');
            return false
        }
    }
}

export default authService;