const { getDataById, editData, deleteData } = require('../services/cubeService');

const cubeController = require('express').Router();

cubeController.get('/edit/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        if (cube.creatorId != req.user._id) {
            res.redirect('/404');
        }
        res.render('edit', {
            title: `Edit cube ${req.params.id}`,
            cube
        });
    } catch (error) {
        console.log(error.message);
        res.render('404');
    }

});

cubeController.post('/edit/:id', async (req, res) => {
    try {
        const cube = await editData(req.body, req.params.id);
        res.redirect(`/details/${cube._id}`);
    } catch (error) {
        console.log(error.message);
        res.render('404');
    }

});


cubeController.get('/delete/:id', async (req, res) => {
    try {
        const cube = await getDataById(req.params.id);
        if (cube.creatorId != req.user._id) {
            res.redirect('/404');
        }
        res.render('delete', {
            title: `Delete cube ${req.params.id}`,
            cube
        });
    } catch (error) {
        console.log(error.message);
        res.render('404');
    }

});

cubeController.post('/delete/:id' , async (req, res) => {
    try {
        await deleteData(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
        res.render('404');
    }
})

module.exports = cubeController;