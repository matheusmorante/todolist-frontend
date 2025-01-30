import api from './api';

const taskService = {
    addTask: async (data) => {
        try {
            const response = await api.post('/tasks/add', data);
            return response.data;
        } catch (e) {
            alert(e.response.data.message);
        }
    },

    getTask: async (id) => {
        try {
            const response = await api.get(`tasks/${id}`);
            return response.data; 
        } catch (error) {
            alert(e.response.data.message);
        }
    },

    getTasksByUserId: async (userId) => {
        try {
            const response = await api.get(`/tasks/user/${userId}`)
            return response.data;
        } catch (e) {
            alert(e.response.data.message);
        }
    }
};

export default taskService;