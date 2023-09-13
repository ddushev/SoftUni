const cubeController = require('express').Router();

cubeController.get('/edit/:id', (req, res) => {
    res.render('edit', {
        title: `Edit cube ${req.params.id}`
    });
});


cubeController.get('/delete/:id', (req, res) => {
    res.render('delete', {
        title: `Edit cube ${req.params.id}`
    });
});

module.exports = cubeController;