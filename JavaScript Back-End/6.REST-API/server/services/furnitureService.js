const Furniture = require('../models/Furniture');

async function getFurnitures() {
    return Furniture.find();
}

async function createFurniture(furniture, _ownerId) {
    return Furniture.create({...furniture, _ownerId});
}

async function getFurnitureById(furnitureId) {
    return Furniture.findById(furnitureId);
}

module.exports = {
    createFurniture,
    getFurnitures,
    getFurnitureById
}