const { CONSTANTS } = require('./config/constants');
const databaseConfig =  require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

start();

async function start() {
    const app = require('express')();
    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);
    app.listen(CONSTANTS.PORT, console.log(`Listening on port ${CONSTANTS.PORT}! Now its up to you...`));
}

