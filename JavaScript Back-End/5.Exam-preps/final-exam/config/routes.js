const homeController = require("../controllers/homeController");
const defaultController = require("../controllers/defaultController");
const authController = require("../controllers/authController");
const logoutController = require("../controllers/logoutController");
const itemController = require("../controllers/itemController");
const catalogController = require("../controllers/catalogController");
const searchController = require("../controllers/searchController");
const { hasUser, isGuest } = require("../middlewares/guards");


module.exports = (app) => {
    app.use(homeController);
    app.use('/auth', isGuest, authController);
    app.use('/logout', hasUser, logoutController);
    app.use('/item', hasUser, itemController);
    app.use('/catalog', catalogController);
    app.use('/search', hasUser, searchController);

    app.all('*', defaultController);
};