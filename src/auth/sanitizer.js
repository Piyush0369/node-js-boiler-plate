const jwt = require('jsonwebtoken');
const { body, param, validationResult } = require('express-validator');

module.exports = {
    login: [
        body('username').optional({ checkFalsy: false, checkNull: false }).trim().customSanitizer(value => { return value.replace(/'/g, "''") }).customSanitizer(value => { return value.replace(new RegExp('[\u00FF-\uFFFF]+', 'g'), '') }),
        body('password').optional({ checkFalsy: false, checkNull: false }).trim().customSanitizer(value => { return value.replace(/'/g, "''") }).customSanitizer(value => { return value.replace(new RegExp('[\u00FF-\uFFFF]+', 'g'), '') }),
    ],
}