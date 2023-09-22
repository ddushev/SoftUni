const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, minLength: [5, 'Username minimum length is 5 characters!'] },
    email: { type: String, required: true, minLength: [10, 'Email minimum length is 10 characters!'] },
    hashedPassword: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;