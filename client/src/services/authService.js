import changePassword from "../components/perfil/ChangePassword";
import api from "./api"

const authService = {
    getSessionUser: async () => {
        try {
            const response = await api.get('/session/user');
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

    register: async (data) => {
        try {
            const response = await api.post('/auth/register', data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel realizar cadastro');
            return false
        }
    },

    changePassword: async (data) => {
        try {
            const response = await api.post('/auth/update/password', data);
            
            alert(response.data.message);
            return true;
        } catch (e) {
            alert('Não foi possivel editar usuário');
            return false
        }
    }
}

export default authService;