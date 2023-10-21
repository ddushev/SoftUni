const searchController = require('express').Router();
const { getData, getFilteredData } = require('../services/itemService');
const errorParser = require('../utils/errorParser');

searchController.get('/', async (req, res) => {
    try {

        const items = await getData();
        res.render('search', {
            title: 'Search page',
            items
        });
    } catch (error) {
        res.render('catalog', {
            title: 'Unable to show Search page',
            error: errorParser(error)
        });
    }
});

searchController.get('/query', async (req, res) => {
    try {
        //TODO Change based on search params
        const {name, type} = req.query;
        const items = await getFilteredData(name || '', type || '');
        res.render('search', {
            title: 'Search page',
            items,
            name,
            type
        });
    } catch (error) {
        res.render('catalog', {
            title: 'Unable to show Search page',
            error: errorParser(error)
        });
    }
});

module.exports = searchController;