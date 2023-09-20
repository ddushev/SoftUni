const homeController = require("../controllers/homeController");
const defaultController = require("../controllers/defaultController");
const authController = require("../controllers/authController");
// const attachController = require("../controllers/attachController");
// const catalogController = require("../controllers/catalogController");
// const createController = require("../controllers/createController");
// const cubeController = require("../controllers/cubeController");
// const logoutController = require("../controllers/logoutController");
const { hasUser, isGuest } = require("../middlewares/guards");

// TODO: Require Controllers...

module.exports = (app) => {
    app.use(homeController);
    app.use('/auth', isGuest, authController);
    // app.use('/details', catalogController);
    // app.use('/create', hasUser, createController);
    // app.use('/attach', hasUser, attachController);
    // app.use('/logout', hasUser, logoutController);
    // app.use('/cube', hasUser, cubeController);

    app.all('*', defaultController);
};