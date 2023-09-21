const { createData } = require('../services/itemService');
const errorParser = require('../utils/errorParser');

const itemController = require('express').Router();


//Create functionality
itemController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create an Item'
    });
});

itemController.post('/create', async (req, res) => {
    try {
        
        const errors = [];

        if (req.body.name.length < 2) {
            errors.push('Name should be atleast 2 characters long!');
        }

        if (!/^(https?:\/\/)/.test(req.body.imageUrl)) {
            errors.push('ImageUrl should start with http:// or https://!');
        }

        if (Number(req.body.price) <= 0) {
            errors.push('Price should be positive number!');
        }

        if (req.body.description.length < 10) {
            errors.push('Description should be atleast 10 characters long!');
        }

        if (errors.length > 0) {
            throw errors;
        }

        await createData(req.body, req.user._id);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Failed - Create an Item',
            error: errorParser(error)
        });
    }
});



module.exports = itemController;