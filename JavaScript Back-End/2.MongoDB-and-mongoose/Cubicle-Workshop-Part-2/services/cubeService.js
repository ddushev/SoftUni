const Accessory = require('../models/Accessory');
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
    return Cube.findById(id).populate('accessories').lean();
}

async function createData(cubeData) {
    const cube = {
        name: cubeData.name,
        description: cubeData.description,
        imageUrl: cubeData.imageUrl,
        difficultyLevel: Number(cubeData.difficultyLevel)
    }
    return Cube.create(cube);
}

async function attachAccessory(cubeId, accessoryId) {
    const [cube, accessory] = await Promise.all([Cube.findById(cubeId).lean(), Accessory.findById(accessoryId).lean()]);
    const accessories = cube.accessories;
    const cubes = accessory.cubes;
    accessories.push(accessoryId);
    cubes.push(cubeId);
    return Promise.all([Cube.findByIdAndUpdate(cubeId, {accessories}), Accessory.findByIdAndUpdate(accessoryId, {cubes})]);
}

module.exports = {
    getData,
    getDataById,
    createData,
    attachAccessory
}