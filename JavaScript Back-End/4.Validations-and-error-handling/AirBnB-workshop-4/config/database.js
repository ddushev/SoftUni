const mongoose = require('mongoose');

const connStr = 'mongodb://localhost:27017/softuni-booking';

module.exports = async (app) => {
    try {
        await mongoose.connect(connStr, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

}