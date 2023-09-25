const Furniture = require('../models/Furniture');

async function getFurnitures() {
    return Furniture.find();
}

async function createFurniture(furniture, _ownerId) {
    return Furniture.create({...furniture, _ownerId});
}

module.exports = {
    createFurniture,
    getFurnitures
}