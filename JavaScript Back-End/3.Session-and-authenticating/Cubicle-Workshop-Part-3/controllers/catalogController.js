const { getDataById } = require('../services/cubeService');

const catalogController = require('express').Router();

catalogController.get('/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        if (req.user) {
            cube.isOwner = req.user._id == cube.creatorId;
        }
        res.render('details', {
            title: `Cube ${req.params.id}`,
            cube
        });
    } catch (error) {
        console.log(error.message);
        res.render('404');
    }

});


module.exports = catalogController;