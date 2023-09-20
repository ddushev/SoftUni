const attachController = require("../controllers/attachController");
const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const cubeController = require("../controllers/cubeController");
const defaultController = require("../controllers/defaultController");
const homeController = require("../controllers/homeController");
const logoutController = require("../controllers/logoutController");
const { hasUser, isGuest } = require("../middlewares/guards");

// TODO: Require Controllers...

module.exports = (app) => {
    app.use(homeController);
    app.use('/details', catalogController);
    app.use('/create', hasUser, createController);
    app.use('/attach', hasUser, attachController);
    app.use('/auth', isGuest, authController);
    app.use('/logout', hasUser, logoutController);
    app.use('/cube', hasUser, cubeController);

    app.all('*', defaultController);
};