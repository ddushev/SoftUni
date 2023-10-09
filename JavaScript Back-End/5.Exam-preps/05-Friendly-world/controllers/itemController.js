const { createData, getDataById, editData, deleteData } = require('../services/itemService');
const { updateUser } = require('../services/userService');
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
        const data = await createData(req.body, req.user._id);
        //TODO: If user has itemCollections array
        // await updateUser(data._id, req.user._id);
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

// itemController.post('/:id/delete' , async (req, res) => {
//     try {
//         await deleteData(req.params.id);
//         res.redirect('/');
//     } catch (error) {
//         console.log(error.message);
//         res.render('404');
//     }
// });

//Interact functionality
//TODO: Change to POST or GET as needed
itemController.post('/:id/interact', async (req, res) => {

    try {
        const item = await getDataById(req.params.id);
        if (item.creatorId._id == req.user._id) {
            throw new Error('You can\'t interact with your own items!');
        }

        if (item.userCollection.some(user => user._id == req.user._id)) {
            throw new Error('You already interacted with that item!');
        }
        
        //TODO: Change error validators based on task
        if (item.price >= req.body.price) {
            throw new Error('Your bid is lower than the current price or bid!');
        }
        item.price = req.body.price;

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
//Remove from catalog
itemController.get('/:id/remove', async (req, res) => {
    try {
        const item = await getDataById(req.params.id);
        if (item.deleted) {
            throw new Error('You already done that!');
        }

        if (item.creatorId._id != req.user._id) {
            throw new Error('You must be creator to do that!');
        }

        if (item.userCollection.length < 1) {
            throw new Error('There must be someone who interacted with that item before you can do that!');
        }

        item.deleted = true;
        await editData(item, req.params.id);
        res.redirect('/my-catalog');
    } catch (error) {
        res.render('404', {
            title: 'Unable remove that item',
            error: errorParser(error)
        });
    }
});

module.exports = itemController;