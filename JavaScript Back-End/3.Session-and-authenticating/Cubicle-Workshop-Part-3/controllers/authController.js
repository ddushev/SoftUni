const authController = require('express').Router();

//TODO authController

authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    })
})

authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    })
})

module.exports = authController;