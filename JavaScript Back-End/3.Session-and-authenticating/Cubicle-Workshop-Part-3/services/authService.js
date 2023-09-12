const User = require('../models/User');
const bcrypt = require('bcrypt');

async function register(username, password) {
    const alreadyRegistered = await User.findOne({username}).lean();
    if (alreadyRegistered) {
        throw new Error('The username is already taken!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({username, hashedPassword});
    return user.username;
}

module.exports = {
    register
}