const { getData, getDataById } = require('../services/itemService');
const errorParser = require('../utils/errorParser');

const catalogController = require('express').Router();
//Render catalog
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

//Details functionality
catalogController.get('/:id/details', async (req, res) => {
    try {
        const item = await getDataById(req.params.id);
        if (req.user) {
            item.isOwner = req.user._id == item.creatorId._id;
            item.isInteracted = item.userCollection.some(user => user._id == req.user._id);
        }
        
        if(item.userCollection) {
            item.interactedUsers = item.userCollection.map(user => user.email).join(', ');
        }
        
        res.render('details', {
            title: `Details`,
            item
        });
    } catch (error) {
        res.render('404');
    }

});


module.exports = catalogController;