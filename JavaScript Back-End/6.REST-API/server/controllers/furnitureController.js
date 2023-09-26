const { hasUser } = require('../middlewares/guards');
const { createFurniture, getFurnitures, getFurnitureById, updateFurniture, deleteFurniture, getFurnituresByUser } = require('../services/furnitureService');
const furnitureController = require('express').Router();

furnitureController.get('/catalog', async (req, res) => {
    try {
        let furnitures = [];
        if (req.query.where) {
            const userId = req.query.where.split("\"")[1];
            furnitures = await getFurnituresByUser(userId);
        }else {
            furnitures = await getFurnitures();
        }
        res.json(furnitures);
    } catch (error) {
        console.error(error.message);
    }

});

furnitureController.post('/catalog', hasUser, async (req, res) => {
    try {
        const result = await createFurniture(req.body, req.user._id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

furnitureController.get('/catalog/:id', async (req, res) => {
    try {
        const furniture = await getFurnitureById(req.params.id);
        return res.json(furniture);
    } catch (error) {
        console.log(error.message);
    }

});

furnitureController.put('/catalog/:id', async (req, res) => {
    try {
        await updateFurniture(req.params.id, req.body);
    } catch (error) {
        console.log(error.message);
    }
    return res.json({ok: true});

});

furnitureController.delete('/catalog/:id', async (req, res) => {
    try {
        await deleteFurniture(req.params.id);
    } catch (error) {
        console.log(error.message);
    }
    return res.json({ok: true});

});



module.exports = furnitureController;