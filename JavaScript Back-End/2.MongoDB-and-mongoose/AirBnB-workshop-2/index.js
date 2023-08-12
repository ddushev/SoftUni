const express = require('express'); // loads express framework
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');


start();

async function start() {
    const app = express(); //instance of express to run the app
    expressConfig(app);
    routesConfig(app);  
    app.listen(3000, () => console.log('Server listening on port 3000'));
}





