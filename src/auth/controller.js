const pool = require('../../config/db');
const jwt = require('jsonwebtoken');
const CONSTANTS = require('../../utils/constants');

exports.login = (req, res) => {
    const { username } = req.body;

    // if (!username) {
    //     return res.status(400).send('Username is required');
    // }

    // Create a token
    const token = jwt.sign({ username }, CONSTANTS.SECRET_KEY, { expiresIn: '8h' });

    res.json({ token });
};
