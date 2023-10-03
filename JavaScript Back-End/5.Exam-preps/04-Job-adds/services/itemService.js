const Item = require('../models/Item');

async function getData() {
    return Item.find({}).lean();
}

async function getNotDeletedData() {
    return Item.find({deleted: false}).lean();
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

async function getPersonalDataIfUserCollection(userId) {
    return Item.find({ creatorId: userId, deleted: true }).populate('creatorId').populate('userCollection').lean();
}

async function getDataById(id) {
    return Item.findById(id).populate('creatorId').populate('userCollection').lean();
}
//TODO: Change fields based on itemSchema
async function createData(itemData, creatorId) {
    const item = {
        // price: Number(itemData.price),
        // imageUrl: itemData.imageUrl,
        name: itemData.name,
        location: itemData.location,
        companyName: itemData.companyName,
        description: itemData.description,
        itemOptions: itemData.itemOptions,
        creatorId
    }
    return Item.create(item);
}

async function editData(itemData, itemId) {
    return Item.findByIdAndUpdate(itemId, itemData, {runValidators: true});
}

async function deleteData(itemId) {
    return Item.findByIdAndDelete(itemId);
}

module.exports = {
    getData,
    getNotDeletedData,
    getFilteredData,
    getPersonalData,
    getPersonalDataIfUserCollection,
    getDataById,
    createData,
    editData,
    deleteData
}