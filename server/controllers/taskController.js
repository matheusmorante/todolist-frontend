const taskModel = require('../models/taskModel')

const taskController = {
    addTask: async (req, res) => {
        try {
            const {userId, date, description, status} = req.body;
            const newTask = await taskModel.addTask(userId, date, description, status);

            res.status(201).json({ newTask });
        } catch (e) {
            console.error('Erro ao adicionar tarefa: ', e);
            res.status(500).json({ error: 'Erro ao adicionar tarefa'});
        }
    },

    updateTask: async (req, res) => {
        try {
            const { id } = req.params;
            const { date, description, status } = req.body;

            const updatedTask = await taskModel.updateTask(date, description, status, id);
            res.status(200).json(updatedTask);
        } catch (e) {
            console.error('Erro ao atualizar tarefa', e);
            res.status(500).json({ error: 'Erro ao atualizar atrefa'});
        }
    },

    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedTask = await taskModel.deleteTask(id);

            if(deletedTask) {
                res.status(204).send();deletedTask
            } else {
                res.status(404),json({ error: 'Tarefa não encontrada'})
            }
        } catch (e) {
            console.error('Erro ao deletar tarefa: ', e);
            res.status(500).json({ error: 'Erro ao deletar tarefa'})
        }
    },

    getTasksByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const tasks = await taskModel.getTasksByUserId(userId);
            res.status(201).json(tasks);
        } catch (e) {
            console.error('Erro ao buscar todas as tarefas')
        }
    }
};

module.exports = taskController;