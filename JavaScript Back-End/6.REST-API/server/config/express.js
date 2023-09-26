const express = require('express');
const cors = require('cors');
const auth = require('../middlewares/auth');

const expressConfig = (app) => {
    //Middleware for enabling cross-origin-resource-sharing
    app.use(cors());
        
    //Middleware for parsing incoming requests with JSON payload
    app.use(express.json());

    //Midleware for validating logged-in users
    app.use(auth());
    
}

module.exports = expressConfig;