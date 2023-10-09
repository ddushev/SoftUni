const homeController = require("../controllers/homeController");
const defaultController = require("../controllers/defaultController");
const authController = require("../controllers/authController");
const logoutController = require("../controllers/logoutController");
const itemController = require("../controllers/itemController");
const catalogController = require("../controllers/catalogController");
// const myCatalogController = require("../controllers/myCatalgController");
const searchController = require("../controllers/searchController");
const { hasUser, isGuest } = require("../middlewares/guards");

// TODO: Require Controllers...

module.exports = (app) => {
    app.use(homeController);
    app.use('/auth', isGuest, authController);
    app.use('/logout', hasUser, logoutController);
    app.use('/item', hasUser, itemController);
    app.use('/catalog', catalogController);
    // app.use('/my-catalog', hasUser, myCatalogController);
    app.use('/search', searchController);

    app.all('*', defaultController);
};