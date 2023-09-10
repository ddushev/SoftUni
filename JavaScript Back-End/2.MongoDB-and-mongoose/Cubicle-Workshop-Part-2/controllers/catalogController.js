const { getDataById } = require('../services/cubeService');

const catalogController = require('express').Router();

catalogController.get('/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        res.render('details', {
            title: 'Details page',
            cube
        });   
    } catch (error) {
        res.render('404');
    }

});


module.exports = catalogController;