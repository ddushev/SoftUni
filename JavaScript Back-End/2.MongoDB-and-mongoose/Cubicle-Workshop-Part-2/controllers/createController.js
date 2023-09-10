const { createData } = require('../services/cubeService');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create', {
        title: 'Create a Cube'
    });
});

createController.post('/', async (req, res) => {
    try {
        await createData(req.body);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Failed - Create a Cube'
        });
    }

})

module.exports = createController;