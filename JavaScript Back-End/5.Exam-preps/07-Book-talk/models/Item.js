const mongoose = require('mongoose');

//TODO Change itemSchema based on task requirements
const itemSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    imageUrl: { type: String, required: true},
    bookReview: { type: String, required: true},
    genre: { type: String, required: true},
    stars: { type: Number, required: true},
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;