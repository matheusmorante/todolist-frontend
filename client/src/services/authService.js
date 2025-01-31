import api from "./api"

const authService = {
    getUser: async () => {
        try {
            const response = await api.get('/auth/user');
            console.log('usuario', response.data);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar ID do usuário:', error);
            return null;
        }
    },
    
    login: async (data) => {
        try {
            const response = await api.post('/auth/login', data);

            alert(response.data.message);
            return true;
        } catch (e) {
            alert(e.response.data.message);
            return false;
        }
    },

    register: async (data) => {
        try {
            const response = await api.post('/auth/register', data);

            if (response.ok) {
                alert(response.data.message);
                return;
            }

        } catch (e) {
            alert(e.response.data.message);
            return false
        }
    },
}

export default authService;