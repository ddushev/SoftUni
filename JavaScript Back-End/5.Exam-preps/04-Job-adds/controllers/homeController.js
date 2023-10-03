const { getData } = require('../services/itemService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const items = (await getData()).slice(0,3);
    res.render('home', {
        title: 'Homepage',
        items
    });
});

module.exports = homeController;