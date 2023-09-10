const fs = require('fs');

const filename = './models/database.json'
const data = JSON.parse(fs.readFileSync(filename));

function getData(search, difficultyFrom, difficultyTo) {
    let filteredData = data;
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

function getDataById(id) {
    return data.find(x => x.id == id);
}

function createData(cubeData) {
    const cube = {
        id: createId(),
        name: cubeData.name,
        description: cubeData.description,
        imageUrl: cubeData.imageUrl,
        difficultyLevel: Number(cubeData.difficultyLevel)
    }
    data.push(cube);
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

function createId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6);
}

module.exports = {
    getData,
    getDataById,
    createData
}