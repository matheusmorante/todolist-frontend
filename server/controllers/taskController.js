const taskModel = require('../models/taskModel')

const taskController = {
    addTask: async (req, res, next) => {
        try {
            const {userId, date, description} = req.body;
            const newTask = await taskModel.addTask(userId, date, description);

            res.status(201).json({ newTask });
        } catch (error) {
            next(error)
        }
    },

    updateTask: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { date, description, status } = req.body;

            const updatedTask = await taskModel.updateTask(date, description, status, id);
            res.status(200).json(updatedTask);
        } catch (error) {
            next(error)
        }
    },

    deleteTask: async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedTask = await taskModel.deleteTask(id);

            if(deletedTask) {
                res.status(204).send();deletedTask
            } else {
                res.status(404),json({ error: 'Tarefa não encontrada'})
            }
        } catch (error) {
            next(error)
        }
    },

    getTasksByUserId: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const tasks = await taskModel.getTasksByUserId(userId);
            res.status(201).json(tasks);
        } catch (error) {
            next(error)
        }
    }
};

module.exports = taskController;