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

async function updateFurniture(furnitureId, furniture) {
    return Furniture.findByIdAndUpdate(furnitureId, furniture);
}

async function deleteFurniture(furnitureId) {
    return Furniture.findByIdAndDelete(furnitureId);
}

module.exports = {
    createFurniture,
    getFurnitures,
    getFurnitureById,
    updateFurniture,
    deleteFurniture
}