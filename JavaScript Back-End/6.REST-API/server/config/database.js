const mongoose = require('mongoose');

const DB_NAME = 'furniture';

const dbConfig = async () => {
    try {
      await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
    } catch (error) {
       console.log(error.message);
       process.exit(1);
    }
}

module.exports = dbConfig;