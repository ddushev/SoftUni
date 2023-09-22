const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: [2, 'The item\'s name should be atleast 2 characters!'] },
    imageUrl: { type: String, required: true, match: [/^(https?:\/\/)/, 'Item\'s image must start with http or https'] },
    price: { type: Number, required: true, min: [1, 'The item\'s price should be a positive number!'] },
    description: { type: String, required: true, minLength: [10, 'The\'s description should be atleast 10 characters!'] },
    itemOptions: { type: String, required: true, enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'] },
    userCollection: { type: [mongoose.Types.ObjectId], default: [], ref: 'User' },
    creatorId: { type: mongoose.Types.ObjectId }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;