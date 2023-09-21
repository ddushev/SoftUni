const homeController = require("../controllers/homeController");
const defaultController = require("../controllers/defaultController");
const authController = require("../controllers/authController");
const logoutController = require("../controllers/logoutController");
const itemController = require("../controllers/itemController");
const catalogController = require("../controllers/catalogController");
// const attachController = require("../controllers/attachController");
// const cubeController = require("../controllers/cubeController");
const { hasUser, isGuest } = require("../middlewares/guards");

// TODO: Require Controllers...

module.exports = (app) => {
    app.use(homeController);
    app.use('/auth', isGuest, authController);
    app.use('/logout', hasUser, logoutController);
    app.use('/item', hasUser, itemController);
    app.use('/catalog', catalogController);
    // app.use('/attach', hasUser, attachController);
    // app.use('/cube', hasUser, cubeController);

    app.all('*', defaultController);
};