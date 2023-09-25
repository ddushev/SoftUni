const authController = require("../controllers/authController");
const furnitureController = require("../controllers/furnitureController");

module.exports = (app) => {
    app.use('/users', authController);
    app.use('/data', furnitureController);
}