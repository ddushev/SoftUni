const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: {type: String, required: true, minLength: [4, 'Make min length is 4 chars!']},
    model: {type: String, required: true, minLength: [4, 'Model min length is 4 chars!']},
    year: {type: Number, required: true, min: 1950, max: 2050},
    description: {type: String, required: true, minLength: 10},
    price: {type: Number, required: true, min: 1},
    img: {type: String, required: true},
    material: {type: String},
    _ownerId: {type: mongoose.Types.ObjectId, ref: 'User'}
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;