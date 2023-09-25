const { createFurniture } = require('../services/furnitureService');
const furnitureController = require('express').Router();

furnitureController.post('/catalog', async (req, res) => {
    try {
        await createFurniture(req.body, req.user._id);
    } catch (error) {
        console.log(error.message);
    }
    return res.json({ok: true});
})

module.exports = furnitureController;