const { login, register } = require('../services/authServices');
const authController = require('express').Router();

authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

authController.post('/login', async (req, res) => {
    try {
        const result = await login(req.body.username, req.body.password);
        attachToken(req, res, result);
        res.redirect('/');
    } catch (error) {
        res.render('login', {
            title: 'Login',
            error: error.message.split('\n')
        })
    }

});

authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

authController.post('/register', async (req, res) => {
    try {
        if (req.body.username.trim() == '' || req.body.password.trim() == '') {
            throw new Error('All fields are required')
        }

        if (req.body.rePass.trim() != req.body.password.trim()) {
            throw new Error('Passwords don\'t match')
        }
        const result = await register(req.body.username.trim(), req.body.password.trim());
        attachToken(req, res, result);
        res.redirect('/');
    } catch (error) {
        res.render('register', {
            title: 'Register',
            error: error.message.split('\n')
        })
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
})

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 14400000 });
}

module.exports = authController;