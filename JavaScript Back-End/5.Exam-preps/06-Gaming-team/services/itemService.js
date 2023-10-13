const Item = require('../models/Item');

async function getData() {
    return Item.find({}).lean();
}

async function getNotDeletedData() {
    return Item.find({deleted: false}).lean();
}

async function getFilteredData(search, itemOptions) {
    //TODO Change based on search params
    let filteredData = await Item.find({}).lean();
    if (search) {
        filteredData = filteredData.filter(item => item.search.toLowerCase().includes(search.toLowerCase()))
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
//TODO Change fields based on itemSchema
async function createData(itemData, creatorId) {
    const item = {
        name: itemData.name,
        imageUrl: itemData.imageUrl,
        price: Number(itemData.price),
        description: itemData.description,
        genre: itemData.genre,
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