const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 50 },
    imageUrl: { type: String, required: true, match: /^(https?:\/\/.+)$/ },
    cubes: { type: [mongoose.Types.ObjectId], default: [], ref: 'Cube' }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;