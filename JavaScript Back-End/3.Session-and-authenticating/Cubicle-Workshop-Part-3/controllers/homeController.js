const { getData } = require('../services/cubeService');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    try {
        const {search , from: difficultyFrom, to: difficultyTo } = req.query;
        const cubes = await getData(search || '', difficultyFrom || '', difficultyTo || '');
        res.render('home', {
            title: 'Cubicle',
            cubes,
            search,
            difficultyFrom,
            difficultyTo
        });
    } catch (error) {
        console.log(error.message);
        res.render('404');
    }

});

homeController.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    });
});

module.exports = homeController;
