const mongoose = require('mongoose');

//TODO: Change userSchema based on task requirements
const userSchema = new mongoose.Schema({
    // username: { type: String, required: true },
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    description: {type: String, required: true},
    email: { type: String, required: true},
    hashedPassword: { type: String, required: true },
    itemCollection: {type: [mongoose.Types.ObjectId], default: [], ref:'Item'}
});

userSchema.index({email: 1}, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;