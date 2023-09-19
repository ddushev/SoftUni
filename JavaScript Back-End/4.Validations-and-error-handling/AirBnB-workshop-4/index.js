const express = require('express'); // loads express framework
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const databaseConfig = require('./config/database');


start();

async function start() {
    const app = express(); //instance of express to run the app
    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);
    app.listen(3001, () => console.log('Server listening on port 3001'));
}





