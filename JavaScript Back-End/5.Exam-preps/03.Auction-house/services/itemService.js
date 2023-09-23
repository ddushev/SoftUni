const Item = require('../models/Item');

async function getData() {
    return Item.find({}).lean();
}

async function getFilteredData(name, itemOptions) {
    let filteredData = await Item.find({}).lean();
    if (name) {
        filteredData = filteredData.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (itemOptions) {
        filteredData = filteredData.filter(item => item.itemOptions == itemOptions);
    }

    return filteredData;
}

async function getPersonalData(userId) {
    return Item.find({ creatorId: userId }).populate('creatorId').populate('userCollection').lean();
}

async function getDataById(id) {
    return Item.findById(id).populate('creatorId').populate('userCollection').lean();
}

async function createData(itemData, creatorId) {
    const item = {
        // price: Number(itemData.price),
        // itemOptions: itemData.itemOptions,
        species: itemData.species,
        skinColor: itemData.skinColor,
        eyeColor: itemData.eyeColor,
        name: itemData.name,
        description: itemData.description,
        imageUrl: itemData.imageUrl,
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
    getFilteredData,
    getPersonalData,
    getDataById,
    createData,
    editData,
    deleteData
}