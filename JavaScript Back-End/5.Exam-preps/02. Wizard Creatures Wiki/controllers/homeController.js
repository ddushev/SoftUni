const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Homepage'
    });
});

module.exports = homeController;