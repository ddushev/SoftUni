const authController = require('express').Router();
const { register, login } = require('../services/authService');
const jwt = require('jsonwebtoken');
const errorParser = require('../utils/errorParser');
const { CONSTANTS } = require('.././config/constants');

//Login endpoints

authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

authController.post('/login', async (req, res) => {
    try {
        const user = await login(req.body.password, req.body.email);
        saveToken(req, res, user);
        res.redirect('/');
    } catch (error) {
        res.render('login', {
            title: 'Login Failed',
            error: errorParser(error)
        });
    }

})

//Register endpoints

authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

authController.post('/register', async (req, res) => {
    try {
        const errors = [];

        // if (req.body.username.length < 5) {
        //     errors.push('Username should be atleast 5 characters long!');
        // }

        if (req.body.firstName.length < 3) {
            errors.push('Firstname should be atleast 3 characters long!');
        }

        if (req.body.lastName.length < 3) {
            errors.push('Lastname should be atleast 3 characters long!');
        }

        if (req.body.email.length < 10) {
            errors.push('Email should be atleast 10 characters long!');
        }

        if (req.body.password.length < 4) {
            errors.push('Password should be atleast 4 characters long!');
        }

        if (req.body.password != req.body.repeatPassword) {
            errors.push('Passwords don\'t match!');
        }

        if (errors.length > 0) {
            throw errors;
        }

        const user = await register(req.body);
        saveToken(req, res, user);
        res.redirect('/');
    } catch (error) {
        res.render('register', {
            title: 'Registration Failed',
            error: errorParser(error)
        });
    }

});

function saveToken(req, res, data) {
    const token = jwt.sign(data, CONSTANTS.JWT_SECRET, { expiresIn: '4h' });
    res.cookie('jwt', token);
}

module.exports = authController;