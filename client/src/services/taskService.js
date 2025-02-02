import dataNow from '../utils/dateNow';
import api from './api';

const taskService = {
    addTask: async (data) => {
        try {
            const sessionUser = await api.get('/session/user');
            const userId = sessionUser.data.id;

            const newData = { ...data, date: dataNow(), userId};
            const response = await api.post('/tasks/add', newData);
            return response.data;
        } catch (e) {
            alert('Não foi possivel adicionar tarefa.');
        }
    },

    getTask: async (id) => {
        try {
            const response = await api.get(`/tasks/${id}`);
            return response.data; 
        } catch (error) {
            alert('Erro ao buscar tarefa');
        }
    },

    getTasksByUserId: async (userId) => {
        try {
            const response = await api.get(`/tasks/user/${userId}`)
            return response.data;
        } catch (e) {
            alert('Erro ao buscar tarefas por usuário');
        }
    }
};

export default taskService;