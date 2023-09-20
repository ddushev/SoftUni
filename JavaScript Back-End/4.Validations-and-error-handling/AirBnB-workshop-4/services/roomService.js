const Room = require('../models/Room');

async function getAll(search) {
    return Room.find({}).lean();
}

async function getById(id) {
    return Room.findById(id).populate('facilities').lean();
}

async function create(roomData, ownerId) {
    const room = {
        name: roomData.name,
        city: roomData.city,
        imgUrl: roomData.imgUrl,
        beds: Number(roomData.beds),
        price: Number(roomData.price),
        description: roomData.description,
        owner: ownerId
    }
    const missing = Object.entries(room).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'));
    }
    const result = await Room.create(room);
    return result;
}

async function update(roomId, roomData) {
    const missing = Object.entries(roomData).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'));
    }
    
    const room = await Room.findById(roomId);
    
    room.name = roomData.name;
    room.city = roomData.city;
    room.imgUrl = roomData.imgUrl;
    room.beds = Number(roomData.beds);
    room.price = Number(roomData.price);
    room.description = roomData.description;

    await room.save();
    return room; 

}

async function deleteById(roomId) {
    return Room.findByIdAndRemove(roomId);
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}
