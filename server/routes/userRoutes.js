const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/add', userController.addUser);
router.put('/update/:id', userController.updateUser); 
router.delete('/delete/:id', userController.deleteUser);
router.get('/:id', userController.getUser);
router.get('/user/:userId', userController.getAllUsers);

module.exports = router;