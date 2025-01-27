import api from "./api"

const authService = {
    
    login: () => {
        try {
            const response = api.post('/auth/login');

            if (response.ok) {
                alert('Login bem-sucedido!');
                return true
            }  else {
                alert('Erro no login. Verifique suas credenciais.');
                return false;
            }
        } catch (e) {
            console.error('Login error:', e);
            return false;
        }
    },

    register: async (data) => {
        try {
            const response = await api.post('/auth/register', data);
            
            return response.data;
        } catch (e) {
           console.error('Erro ao registrar usuário: ', e);
        }
    },
}

export default authService;