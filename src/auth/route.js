const express = require('express');
const router = express.Router();
const controller = require('./controller');
const sanitizer = require('./sanitizer');
const validator = require('./validator');

router.post('/login',
    validator.login,
    sanitizer.login,
    controller.login
);

module.exports = router;
