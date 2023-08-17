const express = require('express'); // loads express framework
const hbs = require('express-handlebars').create({ //loads handlebars library
    extname: '.hbs'
});

const jwtSecret = 'secret';


const cookieParser = require('cookie-parser');
const defaultTitle = require('../middlewares/defaultTitle');
const auth = require('../middlewares/auth');
const userNav = require('../middlewares/userNav');


module.exports = (app) => {
    app.engine('.hbs', hbs.engine); // configures the view engine for the app
    app.set('view engine', '.hbs'); //sets default extension for views if not explicitly set
    
    app.use(express.urlencoded({ extended: true })); // adding the middleware for handling forms
    app.use('/static', express.static('static')); // adding static folder to load static files
    app.use(cookieParser()); // adding cookie-parser library
    app.use(auth(jwtSecret)); // authenticating user based on his token on every request
    app.use(userNav()); // checks if there is a logged in user
    
    app.use(defaultTitle('AirBnB'));
}