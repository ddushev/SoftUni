const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: { type: String, 
        required: true, 
        minLength: [5, 'Cube\'s name must be atleast 5 chars!'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9\s]+$/g.test(v)
            },
            message: 'Cube\'s name contains not allowed characters'
        }
    },
    description: { type: String, 
        required: true, 
        minLength: [20, 'Cube\'s description must be atleast 20 chars!'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9\s]+$/g.test(v)
            },
            message: 'Contains not allowed characters'
        }
     },
    imageUrl: { type: String, required: true, match: [/^(https?:\/\/.+)$/, 'Cube\'s imageUrl must start with http or https'] },
    difficultyLevel: { type: Number, required: true, min: 1, max: 10 },
    accessories: { type: [mongoose.Types.ObjectId], default: [], ref: 'Accessory' },
    creatorId: {type: String, required: true}
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;