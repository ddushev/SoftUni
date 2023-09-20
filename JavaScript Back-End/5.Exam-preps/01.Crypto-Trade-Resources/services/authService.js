const User = require('../models/User');
const bcrypt = require('bcrypt');

async function login(username, password, email) {

    const user = await User.findOne({ email }).lean();

    if (!user) {
        throw new Error('Email or password don\'t match');
    }

    const validPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!validPassword) {
        throw new Error('Email or password don\'t match');
    }

    return {
        _id: user._id,
        user: user.username,
        email: user.email
    };
}

async function register(username, password, email) {

    const alreadyRegistered = await User.findOne({ username }).lean();
    if (alreadyRegistered) {
        throw new Error('The username is already taken!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, hashedPassword, email });
    return {
        _id: user._id,
        user: user.username,
        email: user.email
    };
}

module.exports = {
    register,
    login
}