const pool = require('../../config/db');

exports.getAllStudents = (req, res) => {
    pool.query('SELECT * FROM student', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'An error occurred while fetching users' });
        }
        res.status(200).json(results);
    });
};