const taskModel = require('../models/taskModel')

const taskController = {
    addTask: async (req, res) => {
        try {
            const {userId, date, description, status} = req.body;
            const newTask = await taskModel.addTask(userId, date, description, status);

            res.status(201).json({ newTask });
        } catch (error) {
            res.next(error)
        }
    },

    updateTask: async (req, res) => {
        try {
            const { id } = req.params;
            const { date, description, status } = req.body;

            const updatedTask = await taskModel.updateTask(date, description, status, id);
            res.status(200).json(updatedTask);
        } catch (error) {
            res.next(error)
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
        } catch (error) {
            res.next(error)
        }
    },

    getAllTasks: async (req, res) => {
        try {
            const tasks = await taskModel.getAllTasks();
            res.status(201).json(tasks);
        } catch (e) {
            res.next(e)
        }
    },

    getTasksByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const tasks = await taskModel.getTasksByUserId(userId);
            res.status(201).json(tasks);
        } catch (error) {
            res.next(error)
        }
    }
};

module.exports = taskController;