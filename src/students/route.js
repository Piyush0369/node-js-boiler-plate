const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAllStudents);
// router.get('/users/:id', userController.getUserById);

module.exports = router;
