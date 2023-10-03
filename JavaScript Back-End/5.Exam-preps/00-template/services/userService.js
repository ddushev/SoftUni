const User = require('../models/User');

async function updateUser(itemId, userId) {
    const userData = await User.findById(userId).lean();
    userData.itemCollection.push(itemId);
    return User.findByIdAndUpdate(userId, userData);
}

module.exports = {
    updateUser
}