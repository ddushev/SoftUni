const { createData } = require('../services/cubeService');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create', {
        title: 'Create a Cube'
    });
});

createController.post('/', (req, res) => {
    createData(req.body);
    res.redirect('/');
})

module.exports = createController;