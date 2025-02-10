import dataNow from '../utils/dateNow';
import api from './api';

const taskService = {
    addTask: async (description) => {
        try {
            const sessionUser = await api.get('/users/session');
            const userId = sessionUser.data.id;

            const data = { date: dataNow(), description, userId };
            const response = await api.post('/tasks/add', data);
            return response.data;
        } catch (e) {
            alert('Não foi possivel adicionar tarefa.');
            return false
        }
    },

    updateTask: async (date, description, status, id) => {
        try {
            const data = { date, description, status, id};
            const response = await api.put(`/tasks/update/${id}`, data);
            return response.data; 
        } catch (error) {
            alert('Erro ao editar tarefa');
            return false
        }
    },

    deleteTask: async (id) => {
        try {
            const response = api.delete(`/tasks/delete/${id}`);
            return response.data;
        } catch (error) {
            alert('Erro ao deletar tarefa');
            return false
        }
    },

    getTasksByUserId: async (userId) => {
        try {
            const response = await api.get(`/tasks/user/${userId}`)
            return response.data;
        } catch (e) {
            alert('Erro ao buscar tarefas por usuário');
            return false
        }
    }
};

export default taskService;