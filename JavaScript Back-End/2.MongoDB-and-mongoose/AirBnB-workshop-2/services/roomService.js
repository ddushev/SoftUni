const Room = require('../models/Room');

async function getAll(search) {
    return Room.find({}).lean();
}

async function getById(id) {
    return Room.findById(id).lean();
}

async function create(roomData) {
    const room = {
        name: roomData.name,
        city: roomData.city,
        imgUrl: roomData.imgUrl,
        beds: Number(roomData.beds),
        price: Number(roomData.price),
        description: roomData.description
    }
    const missing = Object.entries(room).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'));
    }
    const result = await Room.create(room);
    return result;
}


module.exports = {
    getAll,
    getById,
    create
}
