const { getAccessories, getAccessoryByName } = require('../services/accessoryService');
const { getDataById, updateData } = require('../services/cubeService');

const attachController = require('express').Router();

attachController.get('/accessory/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        let accessories = await getAccessories();
        cube.accessories.forEach(accessoryId => {
            accessories = accessories.filter(accessory => accessory._id.toString() != accessoryId.toString());
        });
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
        const accessory = await getAccessoryByName(req.body.accessory);
        await updateData(req.params.id, accessory._id);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        console.log(error.message);
        res.render('attachAccessory', {
            title: "Failed to Attach Accessory"
        });

    }
});

module.exports = attachController