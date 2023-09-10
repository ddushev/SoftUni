const { getDataById } = require('../services/cubeService');

const attachController = require('express').Router();

attachController.get('/accessory/:id', async (req, res) => {
    const cube = await getDataById(req.params.id);
    console.log(cube);
    res.render('attachAccessory', {
        title: 'Attach Acessory to a Cube',
        cube
    })
});

module.exports = attachController