const { hasUser } = require('../middlewares/guards');
const { createFurniture, getFurnitures, getFurnitureById, updateFurniture, deleteFurniture, getFurnituresByUser } = require('../services/furnitureService');
const errorMapper = require('../util/errorMapper');
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
        const message = errorMapper(error);
        res.status(400).json({message});
    }

});

furnitureController.post('/catalog', hasUser, async (req, res) => {
    try {
        const result = await createFurniture(req.body, req.user._id);
        res.status(201).json(result);
    } catch (error) {
        const message = errorMapper(error);
        res.status(400).json({message});
    }
});

furnitureController.get('/catalog/:id',     async (req, res) => {
    try {
        const furniture = await getFurnitureById(req.params.id);
        return res.json(furniture);
    } catch (error) {
        const message = errorMapper(error);
        res.status(400).json({message});
    }

});

furnitureController.put('/catalog/:id', async (req, res) => {
    try {
        await updateFurniture(req.params.id, req.body);
        return res.status(204).end();
    } catch (error) {
        const message = errorMapper(error);
        res.status(400).json({message});
    }

});

furnitureController.delete('/catalog/:id', async (req, res) => {
    try {
        await deleteFurniture(req.params.id);
        return res.status(204).end();
    } catch (error) {
        const message = errorMapper(error);
        res.status(400).json({message});
    }

});



module.exports = furnitureController;