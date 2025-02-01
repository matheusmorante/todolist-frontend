const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.get('/user', sessionController.getUser)


module.exports = router;