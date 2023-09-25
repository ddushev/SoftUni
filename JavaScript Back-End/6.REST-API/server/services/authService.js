const User = require("../models/User");
const bcrypt = require('bcrypt');

async function login(credentials) {
    const user = await User.findOne({email: credentials.email}).lean();

    if (!user) {
        throw new Error('Email or password don\'t match!');
    }
    
    const validPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

    if (!validPassword) {
        throw new Error('Email or password don\'t match!');
    }

    return user;
}

async function register(credentials) {
    const isRegistered = await User.findOne({email: credentials.email}).lean();

    if (isRegistered) {
        throw new Error('Email is already registered');
    }
    const hashedPassword = await bcrypt.hash(credentials.password, 10);
    const userCredentials = {
        email: credentials.email,
        hashedPassword
    }

    return User.create(userCredentials);
}

module.exports = {
    login,
    register
}