import api from './api';

const userService = {
    getUserById: async (id) => {
        try {
            const response = await api.get(`/users/${id}`);
            return response.data; 
        } catch (e) {
            throw e.response.data.error;
        }
    },
    getUserByEmail: async (email) => {
        try {
            const response = await api.get(`/users/${email}`);
            return response.data; 
        } catch (e) {
            throw e.response.data.error;
        }
    }
};

export default userService;