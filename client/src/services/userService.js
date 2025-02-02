import api from './api';

const userService = {
    getUserById: async (id) => {

        const response = await api.get(`/users/${id}`);
        return response.data;

    },
    getUserByEmail: async (email) => {
        const response = await api.get(`/users/${email}`);
        return response.data;

    }
};

export default userService;