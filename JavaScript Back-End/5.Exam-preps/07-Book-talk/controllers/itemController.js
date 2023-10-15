const { createData, getDataById, editData, deleteData } = require('../services/itemService');
const errorParser = require('../utils/errorParser');
const validationChecker = require('../utils/validationChecker');

const itemController = require('express').Router();


//Create functionality
itemController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create an Item'
    });
});

itemController.post('/create', async (req, res) => {
    try {
        validationChecker(req);
        await createData(req.body, req.user._id);
        res.redirect('/catalog');
    } catch (error) {
        res.render('create', {
            title: 'Failed - Create an Item',
            error: errorParser(error)
        });
    }
});

//Edit functionality
itemController.get('/:id/edit', async (req, res) => {
    try {
        const item = await getDataById(req.params.id);
        if (item.creatorId._id != req.user._id) {
            throw new Error('You must be creator to edit an item!');
        }
        res.render('edit', {
            title: `Edit item`,
            item
        });
    } catch (error) {
        res.render('404', {
            title: 'Unable to open edit page',
            error: errorParser(error)
        });
    }

});

itemController.post('/:id/edit', async (req, res) => {
    try {
        validationChecker(req);
        const item = await editData(req.body, req.params.id);
        res.redirect(`/catalog/${item._id}/details`);
    } catch (error) {
        const item = await getDataById(req.params.id);
        res.render('edit', {
            title: 'Unable to edit item',
            item,
            error: errorParser(error)
        });
    }

});

//Delete functionality
itemController.get('/:id/delete', async (req, res) => {
    try {
        const item = await getDataById(req.params.id);
        if (item.creatorId._id != req.user._id) {
            throw new Error('You must be creator to delete an item!');
        }
        await deleteData(req.params.id);
        res.redirect('/catalog');
    } catch (error) {
        res.render('404', {
            title: 'Unable delete item',
            error: errorParser(error)
        });
    }

});

//Interact functionality
//TODO Change to POST or GET as needed
itemController.post('/:id/interact', async (req, res) => {

    try {
        const item = await getDataById(req.params.id);
        if (item.creatorId._id == req.user._id) {
            throw new Error('You can\'t interact with your own items!');
        }

        if (item.userCollection.some(user => user._id == req.user._id)) {
            throw new Error('You already interacted with that item!');
        }


        item.userCollection.push(req.user._id);
        await editData(item, req.params.id);
        res.redirect(`/catalog/${req.params.id}/details`);
    } catch (error) {
        res.render('404', {
            title: 'Unable to interact',
            error: errorParser(error)
        });
    }
});


module.exports = itemController;