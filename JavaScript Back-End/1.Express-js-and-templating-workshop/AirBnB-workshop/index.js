const express = require('express'); // loads express framework
const hbs = require('express-handlebars').create({ //loads handlebars library
    extname: '.hbs'
})

const app = express(); //instance of express to run the app

app.engine('.hbs', hbs.engine); // configures the view engine for the app
app.set('view engine', '.hbs'); //sets default extension for views if not explicitly set. e.g instead of "router.render('home.hbs')" we can just "router.render('home')"
app.use(express.urlencoded({extended:true})); // adding the middleware for handling forms
app.use('/static', express.static('static')); // adding static folder to load static files

app.listen(3000, () => console.log('Server listening on port 3000'));