const jwt = require('jsonwebtoken');
const secret = 'mysecret';

module.exports = () => async (req, res, next) => {
    const token = req.headers['x-authorization'];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, secret);
            req.user = decodedToken;
        } catch (error) {
            console.error(error);
            return res.status(401).json({ message: 'Invalid access token. Please log in'});
        }
    }
    next();
}