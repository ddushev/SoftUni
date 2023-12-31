const User = require('../models/User');
const bcrypt = require('bcrypt');

async function login(password, email) {

    const user = await User.findOne({ email }).lean();

    if (!user) {
        throw new Error('Email or password don\'t match');
    }

    const validPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!validPassword) {
        throw new Error('Email or password don\'t match');
    }
    return user;
}

async function register(userData) {
    
    const alreadyRegistered = await User.findOne({ email: userData.email }).lean();
    if (alreadyRegistered) {
        throw new Error('The email is already taken!')
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.hashedPassword = hashedPassword;
    const user = await User.create(userData);
    return user.toObject();
}

module.exports = {
    register,
    login
}