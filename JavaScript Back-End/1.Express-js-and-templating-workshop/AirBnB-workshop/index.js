const express = require('express'); // loads express framework
const hbs = require('express-handlebars').create({ //loads handlebars library
    extname: '.hbs'
})

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const defaultController = require('./controllers/defaultController');
const createController = require('./controllers/createController');
const defaultTitle = require('./middlewares/defaultTitle');

const app = express(); //instance of express to run the app

app.engine('.hbs', hbs.engine); // configures the view engine for the app
app.set('view engine', '.hbs'); //sets default extension for views if not explicitly set
app.use(express.urlencoded({extended:true})); // adding the middleware for handling forms
app.use('/static', express.static('static')); // adding static folder to load static files

app.use(defaultTitle('AirBnB'));
app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);

app.all('*', defaultController);

app.listen(3000, () => console.log('Server listening on port 3000'));