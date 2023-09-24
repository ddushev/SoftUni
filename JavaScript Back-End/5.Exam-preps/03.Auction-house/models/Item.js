const mongoose = require('mongoose');

//TODO: Change itemSchema based on task requirements
const itemSchema = new mongoose.Schema({
    // species: { type: String, required: true, minLength: 3 },
    // skinColor: { type: String, required: true, minLength: 3 },
    // eyeColor: { type: String, required: true, minLength: 3 },
    price: { type: Number, required: true, min: 1 },
    itemOptions: { type: String, required: true, enum: ['estate', 'vehicles', 'furniture', 'electronics', 'other'] },
    name: { type: String, required: true, minLength: 2 },
    imageUrl: { type: String, required: true, match: /^(https?:\/\/)/ },
    description: { type: String, required: true, minLength: 10, maxLength: 500 },
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;