const express = require('express'); // loads express framework
const hbs = require('express-handlebars').create({ //loads handlebars library
    extname: '.hbs'
})
const defaultTitle = require('../middlewares/defaultTitle');


module.exports = (app) => {
    app.engine('.hbs', hbs.engine); // configures the view engine for the app
    app.set('view engine', '.hbs'); //sets default extension for views if not explicitly set
    app.use(express.urlencoded({ extended: true })); // adding the middleware for handling forms
    app.use('/static', express.static('static')); // adding static folder to load static files
    app.use(defaultTitle('AirBnB'));
}