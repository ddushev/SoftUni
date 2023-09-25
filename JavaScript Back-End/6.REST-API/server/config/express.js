const express = require('express');
const cors = require('cors');

const expressConfig = (app) => {
    //Middleware for parsing incoming requests with JSON payload
    app.use(express.json());
    
    //Middleware for enabling cross-origin-resource-sharing
    app.use(cors());
}

module.exports = expressConfig;