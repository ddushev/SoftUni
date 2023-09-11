const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 50 },
    imageUrl: { type: String, required: true, match: /^(https?:\/\/.+)$/ },
    difficultyLevel: { type: Number, required: true, min: 1, max: 10 },
    accessories: { type: [mongoose.Types.ObjectId], default: [], ref: 'Accessory' }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;