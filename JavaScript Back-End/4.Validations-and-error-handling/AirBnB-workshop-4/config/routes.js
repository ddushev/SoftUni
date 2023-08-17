const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const defaultController = require('../controllers/defaultController');
const createController = require('../controllers/createController');
const facilityController = require('../controllers/facilityController');
const authController = require('../controllers/authController');
const roomController = require('../controllers/roomController');

const { hasUser, isGuest } = require('../middlewares/guards');

module.exports = (app) => {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/create', hasUser(), createController);
    app.use('/facility', facilityController);
    app.use('/auth', authController);
    app.use('/room', roomController);

    app.all('*', defaultController);
}