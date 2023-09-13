const { getDataById, editData } = require('../services/cubeService');

const cubeController = require('express').Router();

cubeController.get('/edit/:id', async (req, res) => {
    const cube = await getDataById(req.params.id);
    res.render('edit', {
        title: `Edit cube ${req.params.id}`,
        cube
    });
});

cubeController.post('/edit/:id', async (req, res) => {
    try {
        const cube = await editData(req.body, req.params.id);
        res.redirect(`/details/${cube._id}`);
    } catch (error) {
        res.render('404');
    }

});


cubeController.get('/delete/:id', (req, res) => {
    res.render('delete', {
        title: `Edit cube ${req.params.id}`
    });
});

module.exports = cubeController;