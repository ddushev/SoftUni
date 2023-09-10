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

module.exports = {
    getData,
    getDataById,
    createData
}