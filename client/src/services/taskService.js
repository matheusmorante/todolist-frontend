import dataNow from '../utils/dateNow';
import api from './api';

const taskService = {
    addTask: async (data) => {
        try {
            const sessionUser = await api.get('/session/user');
            const userId = sessionUser.data.id;

            const newData = { ...data, date: dataNow(), userId};
            console.log(newData);
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
            alert('erro');
        }
    },

    getTasksByUserId: async (userId) => {
        try {
            const response = await api.get(`/tasks/user/${userId}`)
            return response.data;
        } catch (e) {
            alert('erro');
        }
    }
};

export default taskService;