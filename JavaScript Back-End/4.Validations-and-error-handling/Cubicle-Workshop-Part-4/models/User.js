const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        minLength: [5, 'Username minimum length is 5 characters!'], 
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9]+$/g.test(v)
            },
            message: 'Username contains not allowed characters'
        }
    },
    hashedPassword: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;