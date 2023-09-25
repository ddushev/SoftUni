const furnitureController = require('express').Router();

furnitureController.post('/catalog', async (req, res) => {
    console.log(req.body);
})

module.exports = furnitureController;