import api from "./api";

const authService = {
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
}

export default authService;