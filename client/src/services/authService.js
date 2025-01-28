import api from "./api"

const authService = {
    
    login: async (data) => {
        try {
            const response = await api.post('/auth/login', data);

            if (response.ok) {
                alert(response.data.message);
                return true;
            } 

            alert(response.data.message);
            return false;
        } catch (e) {
            console.error('Login error:', e);
            return false;
        }
    },

    register: async (data) => {
        try {
            const response = await api.post('/auth/register', data);
            
            if (response.status === 201) {
                alert(response.data.message);
                return;
            }
                alert(response.data.message);

        
        } catch (e) {
           console.error('Erro ao registrar usuário: ', e);
           return false
        }
    },
}

export default authService;