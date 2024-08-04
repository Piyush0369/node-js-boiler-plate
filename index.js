// Import required modules
const express = require('express');
const { authenticateToken } = require('./middleware/authenticator');
const version1 = require('./versions/v1');

// Create Express application
const app = express();
const port = 3000;

// Middleware to parse JSON bodies   
app.use(express.json());

const jwt = require('jsonwebtoken');

const secretKey = 'OLYMPIC';


app.use('/v1', version1);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// JWT --------------------------------------------------------------


// app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected route', user: req.user });
// });