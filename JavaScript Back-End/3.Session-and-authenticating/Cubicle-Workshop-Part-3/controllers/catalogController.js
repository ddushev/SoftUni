const { getDataById } = require('../services/cubeService');

const catalogController = require('express').Router();

catalogController.get('/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        cube.isOwner = req.user._id == cube.creatorId;
        res.render('details', {
            title: `Cube ${req.params.id}`,
            cube
        });   
    } catch (error) {
        res.render('404');
    }

});


module.exports = catalogController;