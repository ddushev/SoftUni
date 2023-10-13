const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const Handlebars = require('handlebars');
const path = require('path');

module.exports = (app) => {
    
    //Setup the view engine
    app.engine('.hbs', hbs.engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');

    //Setup the body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Cookie parser
    app.use(cookieParser());

    //Middleware checking for verified user
    app.use(auth());

    //Setup the static files
    app.use('/static', express.static(path.join(__dirname, '../static')));

    //Add Handlebars custom helper for selected options
    Handlebars.registerHelper('isSelected', function(value, selectedValue) {
        return value == selectedValue ? 'selected' : '';
    })
};