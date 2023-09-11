const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config')[env];

module.exports = async (app) => {
    try {
        await mongoose.connect(config.db_uri);
    } catch (error) {
        console.log(error.message);
    }
    
}