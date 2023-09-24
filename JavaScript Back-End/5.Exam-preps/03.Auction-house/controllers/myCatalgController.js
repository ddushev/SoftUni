const { getPersonalDataIfUserCollection } = require('../services/itemService');

const myCatalogController = require('express').Router();

myCatalogController.get('/', async (req, res) => {
    try {
        //TODO: Change based on requirements
        const items = await getPersonalDataIfUserCollection(req.user._id);

        for (let item of items) {
            item.interactedUsers = item.userCollection.map(user => `${user.firstName} ${user.lastName}`).join(', ');
        }
        res.render('my-catalog', {
            title: 'My Catalog',
            items
        });
    } catch (error) {
        res.render('my-catalog', {
            title: 'Unable to show My Catalog',
            error: errorParser(error)
        });
    }
});



module.exports = myCatalogController;