const mysql = require('mysql');
const CONSTANTS = require('../utils/constants');

const pool = mysql.createPool({
    host: CONSTANTS.DB_HOST,
    user: CONSTANTS.DB_USER,
    password: CONSTANTS.DB_PASSWORD,
    database: CONSTANTS.DB_NAME
});

module.exports = pool;
