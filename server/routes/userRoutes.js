const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.put('/update/:id', userController.updateUser); 
router.delete('/delete/:id', userController.deleteUser);
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);

module.exports = router;