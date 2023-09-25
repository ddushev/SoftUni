const { createFurniture, getFurnitures, getFurnitureById } = require('../services/furnitureService');
const furnitureController = require('express').Router();

furnitureController.get('/catalog', async (req, res) => {
    try {
        const furnitures = await getFurnitures();
        return res.json(furnitures);
    } catch (error) {
        console.log(error.message);
    }

});

furnitureController.post('/catalog', async (req, res) => {
    try {
        await createFurniture(req.body, req.user._id);
    } catch (error) {
        console.log(error.message);
    }
    return res.json({ok: true});
});

furnitureController.get('/catalog/:id', async (req, res) => {
    try {
        const furniture = await getFurnitureById(req.params.id);
        return res.json(furniture);
    } catch (error) {
        console.log(error.message);
    }

});

module.exports = furnitureController;