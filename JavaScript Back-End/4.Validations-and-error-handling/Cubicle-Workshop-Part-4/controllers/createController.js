const { createAccessory } = require('../services/accessoryService');
const { createData } = require('../services/cubeService');
const errorParser = require('../utils/errorParser');

const createController = require('express').Router();

createController.get('/cube', (req, res) => {
    res.render('create', {
        title: 'Create a Cube'
    });
});

createController.post('/cube', async (req, res) => {
    try {
        await createData(req.body, req.user._id);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Failed - Create a Cube',
            error: errorParser(error)
        });
    }
});

createController.get('/accessory', (req, res) => {
    res.render('createAccessory', {
        title: 'Create Accessory'
    });
});

createController.post('/accessory', async (req, res) => {
    try {
        await createAccessory(req.body);
        res.redirect('/');
    } catch (error) {
        res.render('createAccessory', {
            title: 'Failed to Create Accessory',
            error: errorParser(error)
        });
    }
});


module.exports = createController;