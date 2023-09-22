const Item = require('../models/Item');

async function getData() {
    return Item.find({}).lean();
}

async function getFilteredData(name, itemOptions) {
    let filteredData = await Item.find({}).lean();
    if(name) {
        filteredData = filteredData.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (itemOptions) {
        filteredData = filteredData.filter(item => item.itemOptions == itemOptions);
    }

    return filteredData;
}

async function getDataById(id) {
    return Item.findById(id).lean();
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
    getFilteredData,
    getDataById,
    createData,
    editData,
    deleteData
}