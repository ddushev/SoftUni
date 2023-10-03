const databaseConfig =  require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

start();

async function start() {
    const app = require('express')();
    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);
    app.listen(3000, console.log('Listening on port 3000! Now its up to you...'));
}

