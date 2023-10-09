const mongoose = require('mongoose');

//TODO: Change itemSchema based on task requirements
const itemSchema = new mongoose.Schema({
    years: { type: Number, required: true},
    // itemOptions: { type: String, required: true, enum: ['estate', 'vehicles', 'furniture', 'electronics', 'other'] },
    name: { type: String, required: true},
    kind: { type: String, required: true},
    need: { type: String, required: true},
    location: { type: String, required: true},
    imageUrl: { type: String, required: true},
    description: { type: String, required: true},
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
    // deleted: {type: Boolean, default: false}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;