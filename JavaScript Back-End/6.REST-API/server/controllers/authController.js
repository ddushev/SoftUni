const { register } = require('../services/authService');
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

const authController = require('express').Router();

authController.post('/register', async (req, res) => {
    try {
        const result = (await register(req.body)).toJSON();
        result.accessToken = createToken(result);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
    }
});

function createToken(data) {
    return jwt.sign(data, secret, {expiresIn: '4h'})
}

module.exports = authController;