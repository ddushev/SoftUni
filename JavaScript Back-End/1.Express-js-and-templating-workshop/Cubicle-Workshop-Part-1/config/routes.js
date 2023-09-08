const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const defaultController = require("../controllers/defaultController");
const homeController = require("../controllers/homeController");

// TODO: Require Controllers...

module.exports = (app) => {
    // TODO...
    app.use(homeController);
    app.use('/create', createController);
    app.use('/details', catalogController);

    app.all('*', defaultController);
};