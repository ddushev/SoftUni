const dbConfig = require("./config/database");
const expressConfig = require("./config/express");
const routesConfig = require("./config/routes");

start();

async function start() {
    const app = require('express')();
    await dbConfig();
    expressConfig(app);
    routesConfig(app);

    app.listen(3030, console.log('Server is listening on port 3030...'));
}