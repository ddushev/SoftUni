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
        //TODO: Change parameters if
        const {email} = req.query;
        const items = await getFilteredData(email || '');
        res.render('search', {
            title: 'Search page',
            items,
            email
        });
    } catch (error) {
        res.render('catalog', {
            title: 'Unable to show Search page',
            error: errorParser(error)
        });
    }
});

// searchController.post('/', async (req, res) => {
//     try {
//         const {search, itemOptions} = req.query;
//         const items = await getFilteredData(search || '', itemOptions || '');
//         res.render('search', {
//             title: 'Search page',
//             items
//         });
//     } catch (error) {
//         res.render('catalog', {
//             title: 'Unable to show Search page',
//             error: errorParser(error)
//         });
//     }
// });

module.exports = searchController;