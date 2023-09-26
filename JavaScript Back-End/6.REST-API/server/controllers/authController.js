const { isGuest, hasUser } = require('../middlewares/guards');
const { login, register } = require('../services/authService');
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

const authController = require('express').Router();

authController.post('/login', isGuest, async (req, res) => {
    try {
        const result = await login(req.body);
        result.accessToken = createToken(result);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
    }
});

authController.post('/register', isGuest, async (req, res) => {
    try {
        const result = (await register(req.body)).toJSON();
        result.accessToken = createToken(result);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
    }
});

authController.get('/logout', async (req, res) => {
    res.json({ok: true});
});

function createToken(data) {
    return jwt.sign(data, secret, {expiresIn: '4h'})
}

module.exports = authController;