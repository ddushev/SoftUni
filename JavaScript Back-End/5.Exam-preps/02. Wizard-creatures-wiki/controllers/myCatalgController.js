const { getPersonalData } = require('../services/itemService');

const myCatalogController = require('express').Router();
    
myCatalogController.get('/', async (req, res) => {
    try {
        const items = await getPersonalData(req.user._id);
        res.render('my-catalog', {
            title: 'My Catalog',
            items
        });
    } catch (error) {
        res.render('my-catalog', {
            title: 'Unable to show My Catalog',
            error: errorParser(error)
        });
    }
})

module.exports = myCatalogController;