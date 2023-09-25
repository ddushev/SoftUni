const jwt = require('jsonwebtoken');
const secret = 'mysecret';

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];
    if (token) {
        try {
            jwt.verify(token, secret);
        } catch (error) {

        }
    }
   next(); 
}