const express = require('express');
const router = express.Router();
const students = require('../src/students/route')
const auth = require('../src/auth/route');
const { authenticateToken } = require('../middleware/authenticator');

router.use('/students',authenticateToken, students);
router.use('/auth', auth);
// router.get('/users/:id', userController.getUserById);

module.exports = router;
