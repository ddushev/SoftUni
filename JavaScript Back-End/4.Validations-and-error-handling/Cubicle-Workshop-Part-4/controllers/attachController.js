const { getAccessories, getAccessory } = require('../services/accessoryService');
const { getDataById, attachAccessory } = require('../services/cubeService');

const attachController = require('express').Router();

attachController.get('/accessory/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        const accessories = await getAccessories(cube.accessories);
        res.render('attachAccessory', {
            title: 'Attach Accessory to a Cube',
            cube,
            accessories
        });
    } catch (error) {
        console.log(error.message);
        res.render('attachAccessory', {
            title: "Failed to open Attach Accessory page"
        })
    }

});

attachController.post('/accessory/:id', async (req, res) => {
    try {
        const accessory = await getAccessory(req.body.accessory);
        await attachAccessory(req.params.id, accessory._id);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        console.log(error.message);
        res.render('attachAccessory', {
            title: "Failed to Attach Accessory"
        });

    }
});

module.exports = attachController