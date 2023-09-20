const { createData } = require('../services/itemService');
const errorParser = require('../utils/errorParser');

const createController = require('express').Router();

createController.get('/item', (req, res) => {
    res.render('create', {
        title: 'Create an Item'
    });
});

createController.post('/item', async (req, res) => {
    try {
        await createData(req.body, req.user._id);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Failed - Create an Item',
            error: errorParser(error)
        });
    }
});



module.exports = createController;