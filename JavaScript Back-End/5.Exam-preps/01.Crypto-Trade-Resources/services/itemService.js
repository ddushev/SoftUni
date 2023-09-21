const Item = require('../models/Item');

async function getData() {
    return Item.find({}).lean();
}

async function getDataById(id) {
    return Item.findById(id).populate('userCollection').lean();
}

async function createData(itemData, creatorId) {
    const item = {
        name: itemData.name,
        price: itemData.price,
        description: itemData.description,
        imageUrl: itemData.imageUrl,
        itemOptions: itemData.itemOptions,
        creatorId
    }
    return Item.create(item);
}

async function editData(itemData, itemId) {
    return Item.findByIdAndUpdate(itemId, itemData);
}

async function deleteData(itemId) {
    return Item.findByIdAndDelete(itemId);
}

module.exports = {
    getData,
    getDataById,
    createData,
    editData,
    deleteData
}