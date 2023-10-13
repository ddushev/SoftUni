const mongoose = require('mongoose');

//TODO Change itemSchema based on task requirements
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true},
    imageUrl: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
    genre: { type: String, required: true},
    itemOptions: { type: String, required: true, enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'] },
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
    // deleted: {type: Boolean, default: false}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;