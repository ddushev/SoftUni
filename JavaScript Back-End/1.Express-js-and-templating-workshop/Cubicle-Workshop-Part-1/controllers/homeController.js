const { getData } = require('../services/cubeService');

const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    const cubes = getData(req.query.search || '');
    res.render('home', {
        title: 'Cubicle',
        cubes
    });
});

homeController.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})

module.exports = homeController;
