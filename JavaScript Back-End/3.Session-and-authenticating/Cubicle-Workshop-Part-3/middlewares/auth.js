const jwt = require('jsonwebtoken');
const secret = 'mysecret';

module.exports = () => (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const verified = jwt.verify(token, secret);
            res.locals.hasUser = true;
        } catch (error) {
            res.clearCookie('jwt');
            res.redirect('/auth/login');
        }
    }
    next();
}
