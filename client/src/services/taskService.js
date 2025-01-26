import api from './api';

const taskService = {
    addTask: async (data) => {
        try {
            const response = await api.post('/tasks/add', data);
            return response.data;
        } catch (e) {
            throw e.response?.data?.error || 'Erro ao registrar tarefa.';
        }
    },

    getTask: async (id) => {
        try {
            const response = await api.get(`tasks/${id}`);
            return response.data; 
        } catch (error) {
            throw error.response?.data?.error || 'Erro ao buscar tarefa.';
        }
    },

    getTasksByUserId: async(userId) => {
        try {
            const response = await api.get(`/tasks/user/${userId}`)
            return response.data;
        } catch (e) {
            throw e.response?.data?.error || 'Erro ao buscar tarefas por usuário.';
        }
    }
};

export default taskService;