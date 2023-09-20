const Item = require('../models/Item');

async function getData(search, difficultyFrom, difficultyTo) {
    let filteredData = await Item.find({}).lean();
    // if(search) {
    //     filteredData = filteredData.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    // }
    // if (difficultyFrom) {
    //     filteredData = filteredData.filter(cube => cube.difficultyLevel >= Number(difficultyFrom));
    // }

    // if (difficultyTo) {
    //     filteredData = filteredData.filter(cube => cube.difficultyLevel <= Number(difficultyTo));
    // }
    return filteredData;
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