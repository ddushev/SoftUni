const jwt = require('../utils/jwt');
const { CONSTANTS } = require('../config/constants');

module.exports = () => async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const userVerified = await jwt.verify(token, CONSTANTS.JWT_SECRET);
            req.user = userVerified;
            res.locals.hasUser = true;
        } catch (error) {
            res.clearCookie('jwt');
            res.redirect('/auth/login');
        }
    }
    next();
}
