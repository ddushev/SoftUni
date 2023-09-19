const User = require('../models/User');
const bcrypt = require('bcrypt');
const regex = new RegExp('^[a-zA-Z0-9]{3,}$');

async function login(username, password) {

    if (!regex.test(username)) {
        throw new Error('Username contains not allowed characters');
    }

    if (!regex.test(password)) {
        throw new Error('Password contains not allowed characters');
    }

    const user = await User.findOne({ username }).lean();

    if (!user) {
        throw new Error('Username or password don\'t match');
    }

    const validPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!validPassword) {
        throw new Error('Username or password don\'t match');
    }

    return {
        _id: user._id,
        user: user.username
    };


}

async function register(username, password) {
    if (!regex.test(username)) {
        throw new Error('Username contains not allowed characters');
    }

    if (!regex.test(password)) {
        throw new Error('Password contains not allowed characters');
    }

    const alreadyRegistered = await User.findOne({ username }).lean();
    if (alreadyRegistered) {
        throw new Error('The username is already taken!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, hashedPassword });
    return {
        _id: user._id,
        user: user.username
    };
}

module.exports = {
    register,
    login
}