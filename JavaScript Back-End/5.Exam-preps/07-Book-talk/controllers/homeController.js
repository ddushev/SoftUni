const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    res.render('home', {
        title: 'Homepage',
    });
});

module.exports = homeController;