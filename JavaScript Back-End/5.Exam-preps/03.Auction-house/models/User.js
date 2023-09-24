const mongoose = require('mongoose');

//TODO: Change userSchema based on task requirements
const userSchema = new mongoose.Schema({
    // username: { type: String, required: true, minLength: 3 },
    firstName: { type: String, required: true, minLength: 3 },
    lastName: { type: String, required: true, minLength: 3 },
    email: { type: String, required: true, minLength: 10 },
    hashedPassword: { type: String, required: true }
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