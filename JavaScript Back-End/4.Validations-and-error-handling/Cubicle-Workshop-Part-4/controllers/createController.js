const { createAccessory } = require('../services/accessoryService');
const { createData } = require('../services/cubeService');

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
            error
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
        console.log(error.message);
        res.render('createAccessory', {
            title: 'Failed to Create Accessory'
        });
    }
});


module.exports = createController;