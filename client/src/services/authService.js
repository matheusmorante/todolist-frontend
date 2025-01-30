import api from "./api"

const authService = {
    
    login: async (data) => {
        console.log('Função login chamada com os dados:', data);
        try {
            const response = await api.post('/auth/login', data);
            
            if (response.status === 201) {
                alert(response.data.message);
                return true;
            }
            
            return false;
        } catch (e) {
            alert(e.response.data.message);
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
               
        } catch (e) {
            alert(e.response.data.message);
            return false
        }
    },
}

export default authService;