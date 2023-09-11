const Accessory = require('../models/Accessory');

async function getAccessories(cubeAccessories) {
    return Accessory.find({_id: {$nin: cubeAccessories}}).lean();
}

async function createAccessory(accessoryData) {
    return Accessory.create(accessoryData);
}

async function getAccessory(id) {
    return Accessory.findById(id).lean();
}

module.exports = {
    getAccessories,
    createAccessory,
    getAccessory
}