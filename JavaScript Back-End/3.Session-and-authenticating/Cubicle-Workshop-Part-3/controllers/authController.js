const authController = require('express').Router();
const { register } = require('../services/authService');
const jwt = require('jsonwebtoken');
const secret = 'mysecret';

//TODO authController

authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

authController.post('/login', (req, res) => {
    
})

authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

authController.post('/register', async (req, res) => {
    if (req.body.password != req.body.repeatPassword) {
        throw new Error('Passwords don\'t match!');
    }

    const username = await register(req.body.username, req.body.password);
    const token = jwt.sign({username}, secret, {expiresIn: '4h'});
    res.cookie('jwt', token);
    res.redirect('/');
});

module.exports = authController;