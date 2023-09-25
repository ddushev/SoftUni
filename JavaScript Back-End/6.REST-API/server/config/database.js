const mongoose = require('mongoose');

const DB_NAME = 'furniture';

const dbConfig = async () => {
    try {
       mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
    } catch (error) {
       console.log(error.message) ;
    }
}

module.exports = dbConfig;