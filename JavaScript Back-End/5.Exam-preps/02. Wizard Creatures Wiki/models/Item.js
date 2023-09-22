const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    // price: { type: Number, required: true, min: 1 },
    // itemOptions: { type: String, required: true, enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'] },
    species: { type: String, required: true, minLength: 3 },
    skinColor: { type: String, required: true, minLength: 3 },
    eyeColor: { type: String, required: true, minLength: 3 },
    name: { type: String, required: true, minLength: 2 },
    imageUrl: { type: String, required: true, match: /^(https?:\/\/)/ },
    description: { type: String, required: true, minLength: 10, maxLength: 500 },
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;