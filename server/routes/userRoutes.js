const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/session/user', userController.getSessionUser);
router.put('/update/:id/username', userController.changeUsername);
router.put('/update/:id/email', userController.changeEmail); 
router.put('/update/:id/password', userController.changePassword); 
router.get('/:id', userController.getUserById);

module.exports = router;