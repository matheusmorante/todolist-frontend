import api from "./api";

const authService = {
    login: async (data) => {
        try {
            const response = await api.post('/auth/login', data);
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel realizar login:');
            return false;
        }
    },

    logout: async () => {
        try {
            await api.post('/auth/logout');
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
            alert('Não foi possivel registrar o usuário');
            return false
        }
    },
}

export default authService;