const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.post('/add', taskController.addTask);
router.put('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);
router.get('/user/userId', taskController.getTasksByUserId);

module.exports = router

