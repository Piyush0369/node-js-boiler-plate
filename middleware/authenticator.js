const jwt = require('jsonwebtoken');
const secretKey = 'OLYMPIC';

exports.authenticateToken = (req, res, next) => {
    console.log(req.headers)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        console.log(err)
        if (err){ return res.sendStatus(403);}
        req.user = user;
        next();
    });
}

