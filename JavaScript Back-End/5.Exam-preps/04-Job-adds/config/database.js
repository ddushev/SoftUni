const mongoose = require('mongoose');
//TODO: Add DB name
const DB_NAME = 'job-adds';

module.exports = async (app) => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
    } catch (error) {
        console.log(error.message);
    }
    
}