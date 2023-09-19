const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, 'Accessory\'s name must be atleast 5 chars!'],
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9\s]+$/g.test(v)
            },
            message: 'Accessory\'s name contains not allowed characters'
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'Accessory\'s description must be atleast 20 chars!'],
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9\s]+$/g.test(v)
            },
            message: 'Contains not allowed characters'
        }
    },
    imageUrl: { type: String, required: true, match: [/^(https?:\/\/.+)$/, 'Accessory\'s imageUrl must start with http or https'] },
    cubes: { type: [mongoose.Types.ObjectId], default: [], ref: 'Cube' }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;