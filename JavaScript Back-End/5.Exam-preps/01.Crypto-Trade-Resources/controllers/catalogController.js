const { getData } = require('../services/itemService');
const errorParser = require('../utils/errorParser');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    try {
        const items = await getData();
        res.render('catalog', {
            title: 'Item Catalog',
            items
        });
    } catch (error) {
        res.render('catalog', {
            title: 'Unable to show Catalog',
            error: errorParser(error)
        });
    }

});


module.exports = catalogController;