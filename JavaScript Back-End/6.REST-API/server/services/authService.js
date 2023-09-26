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
    return {
        _id: user._id,
        email: user.email,
    }
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
    
    const user = await  User.create(userCredentials);
    return {
        _id: user._id,
        email: user.email,
    }
}

module.exports = {
    login,
    register
}