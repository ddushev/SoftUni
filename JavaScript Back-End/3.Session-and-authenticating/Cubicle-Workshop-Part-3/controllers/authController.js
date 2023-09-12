const authController = require('express').Router();

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

authController.post('/register', (req, res) => {
    
})

module.exports = authController;