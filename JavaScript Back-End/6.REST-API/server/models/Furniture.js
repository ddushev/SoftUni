const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: {type: String, required: true, minLength: 4},
    model: {type: String, required: true, minLength: 4},
    year: {type: Number, required: true, min: 1950, max: 2050},
    description: {type: String, required: true, minLength: 10},
    price: {type: Number, required: true, min: 1},
    img: {type: String, required: true},
    material: {type: String}
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;