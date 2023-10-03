const mongoose = require('mongoose');

//TODO: Change itemSchema based on task requirements
const itemSchema = new mongoose.Schema({
    // price: { type: Number, required: true, min: 1 },
    // itemOptions: { type: String, required: true, enum: ['estate', 'vehicles', 'furniture', 'electronics', 'other'] },
    // imageUrl: { type: String, required: true, match: /^(https?:\/\/)/ },
    name: { type: String, required: true},
    location: { type: String, required: true},
    companyName: { type: String, required: true},
    description: { type: String, required: true, minLength: 5, maxLength: 500 },
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
    // deleted: {type: Boolean, default: false}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;