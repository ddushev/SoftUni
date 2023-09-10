const { findById } = require('../models/Accessory');
const Cube = require('../models/Cube');

async function getData(search, difficultyFrom, difficultyTo) {
    let filteredData = await Cube.find({}).lean();
    if(search) {
        filteredData = filteredData.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (difficultyFrom) {
        filteredData = filteredData.filter(cube => cube.difficultyLevel >= Number(difficultyFrom));
    }

    if (difficultyTo) {
        filteredData = filteredData.filter(cube => cube.difficultyLevel <= Number(difficultyTo));
    }
    return filteredData;
}

async function getDataById(id) {
    return Cube.findById(id).lean();
}

async function createData(cubeData) {
    const cube = {
        name: cubeData.name,
        description: cubeData.description,
        imageUrl: cubeData.imageUrl,
        difficultyLevel: Number(cubeData.difficultyLevel)
    }
    await Cube.create(cube);
}

async function updateData(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId).lean();
    const accessories = cube.accessories;
    accessories.push(accessoryId);
    await Cube.findByIdAndUpdate(cubeId, {accessories});
}

module.exports = {
    getData,
    getDataById,
    createData,
    updateData
}