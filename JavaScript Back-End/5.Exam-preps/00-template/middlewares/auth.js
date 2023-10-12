const jwt = require('jsonwebtoken');
const secret = 'mysecret';

module.exports = () => (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            //TODO refactor with promisify jwt
            const userVerified = jwt.verify(token, secret);
            req.user = userVerified;
            res.locals.hasUser = true;
        } catch (error) {
            res.clearCookie('jwt');
            res.redirect('/auth/login');
        }
    }
    next();
}
