const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.get('/user', sessionController.getSessionUser)


module.exports = router;