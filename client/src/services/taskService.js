import dataNow from '../utils/dateNow';
import api from './api';

const taskService = {
    addTask: async (description) => {
        try {
            const sessionUser = await api.get('/session/user');
            const userId = sessionUser.data.id;

            const data = { date: dataNow(), description, userId };
            const response = await api.post('/tasks/add', data);
            return response.data;
        } catch (e) {
            alert('Não foi possivel adicionar tarefa.');
        }
    },

    updateTask: async (date, description, status, id) => {
        try {
            const data = { date, description, status, id};
            console.log(date, description, status, id);
            const response = await api.put(`/tasks/update/${id}`, data);
            return response.data; 
        } catch (error) {
            alert('Erro ao editar tarefa');
        }
    },

    deleteTask: async (id) => {
        try {
            const response = api.delete(`/tasks/delete/${id}`);
            return response.data;
        } catch (error) {
            alert('Erro ao deletar tarefa');
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