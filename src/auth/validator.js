const jwt = require('jsonwebtoken');
const Response = require('../../utils/response');
const { body, param, validationResult } = require('express-validator');

module.exports = {
    login: [
        body('username')
            .exists({ checkFalsy: true, checkNull: true }),
        function (req, res, next) {
            var errorValidation = validationResult(req);
            if (!errorValidation.isEmpty()) {
                return res.status(Response.required('username').code).send(Response.required('username'));
            }
            next()
        },
        body('password')
            .exists({ checkFalsy: true, checkNull: true }),
        function (req, res, next) {
            var errorValidation = validationResult(req);
            if (!errorValidation.isEmpty()) {
                return res.status(Response.required('password').code).send(Response.required('password'));
            }
            next()
        },
    ]
}