const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // username: { type: String, required: true, minLength: 3 },
    firstName: { type: String, required: true, minLength: 3 },
    lastName: { type: String, required: true, minLength: 3 },
    email: { type: String, required: true, minLength: 10 },
    hashedPassword: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;