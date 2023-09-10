const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/cubical';


module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING);
    } catch (error) {
        console.log(error.message);
    }
    
}