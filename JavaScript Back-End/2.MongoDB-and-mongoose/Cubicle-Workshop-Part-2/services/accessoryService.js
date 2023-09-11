const Accessory = require('../models/Accessory');

async function getAccessories() {
    return Accessory.find({}).lean();
}

async function createAccessory(accessoryData) {
    return Accessory.create(accessoryData);
}

async function getAccessoryByName(name) {
    return Accessory.findOne({name}).lean();
}

module.exports = {
    getAccessories,
    createAccessory,
    getAccessoryByName
}