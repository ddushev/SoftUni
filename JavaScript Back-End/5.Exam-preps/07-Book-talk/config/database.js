const mongoose = require('mongoose');
const { CONSTANTS } = require('./constants');

module.exports = async (app) => {
    try {
        await mongoose.connect(CONSTANTS.DB_CONNECTION_STRING);
        console.log('MongoDB connected with Mongoose!')
    } catch (error) {
        console.log(error.message);
    }

}