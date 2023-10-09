const homeController = require('express').Router();
const { getData } = require('../services/itemService');


homeController.get('/', async (req, res) => {
    //TODO: If home shows some items
    const items = (await getData()).slice(0,3);
    res.render('home', {
        title: 'Homepage',
        items
    });
});

module.exports = homeController;