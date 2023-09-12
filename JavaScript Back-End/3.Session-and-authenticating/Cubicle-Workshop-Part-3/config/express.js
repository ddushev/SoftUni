const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.engine('.hbs', hbs.engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');

    //TODO: Setup the body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Cookie parser
    app.use(cookieParser());

    //TODO: Setup the static files
    app.use('/static', express.static('static'));
};