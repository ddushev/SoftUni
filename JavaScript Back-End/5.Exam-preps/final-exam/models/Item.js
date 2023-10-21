const mongoose = require('mongoose');

//TODO Change itemSchema based on task requirements
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    damages: { type: String, required: true},
    imageUrl: { type: String, required: true},
    description: { type: String, required: true},
    production: { type: Number, required: true},
    exploitation: { type: Number, required: true},
    price: { type: Number, required: true},
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;