const authController = require('express').Router();
const { register, login } = require('../services/authService');
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

//Login endpoints

authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

authController.post('/login', async (req, res) => {
    const user = await login(req.body.username, req.body.password);
    saveToken(req, res, user);
    res.redirect('/');
})

//Register endpoints

authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

authController.post('/register', async (req, res) => {
    if (req.body.password != req.body.repeatPassword) {
        throw new Error('Passwords don\'t match!');
    }

    const user = await register(req.body.username, req.body.password);
    saveToken(req, res, user);
    res.redirect('/');
});

function saveToken(req, res, data) {
    const token = jwt.sign(data, secret, {expiresIn: '4h'});
    res.cookie('jwt', token);
}

module.exports = authController;