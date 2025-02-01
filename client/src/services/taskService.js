import api from './api';

const taskService = {
    addTask: async (data) => {
        try {
            const sessionUser = await api.get('/session/user');
            const userId = sessionUser.data.id;

            const newData = { ...data, userId };
            const response = await api.post('/tasks/add', newData);
            return response.data;
        } catch (e) {
            alert(e.response.data.message);
        }
    },

    getTask: async (id) => {
        try {
            const response = await api.get(`/tasks/${id}`);
            return response.data; 
        } catch (error) {
            alert(e.response.data.message);
        }
    },

    getAllTasks: async (id) => {
        try {
            const response = await api.get(`/tasks`);
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