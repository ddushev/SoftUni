const Accessory = require('../models/Accessory');

async function getAccessories() {
    return Accessory.find({}).lean();
}

async function createAccessory(accessoryData) {
    await Accessory.create(accessoryData);
}

async function getAccessoryById(id) {

}

module.exports = {
    getAccessories,
    createAccessory,
    getAccessoryById
}