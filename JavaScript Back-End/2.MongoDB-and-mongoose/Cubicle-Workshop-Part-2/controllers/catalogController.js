const { getDataById } = require('../services/cubeService');

const catalogController = require('express').Router();

catalogController.get('/:id', (req, res) => {
    const cube = getDataById(req.params.id);
    res.render('details', {
        title: 'Details page',
        cube
    });
});


module.exports = catalogController;