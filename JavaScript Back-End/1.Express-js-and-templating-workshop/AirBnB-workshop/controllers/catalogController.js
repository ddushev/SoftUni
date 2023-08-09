const { getAll, getById } = require('../services/accomodationService');

const router = require('express').Router();

router.get('/', (req,res) => {
    const rooms = getAll();
    res.render('catalog', {
        title: 'All accomodations',
        rooms
    });
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const room = getById(id);
    if(room) {
        res.render('details', {
            title: 'Accomodation details',
            room
        });
    }else {
        res.render('accNotFound' , {
            title: 'Accommodation not found',
            id
        })
    }
    
})

module.exports = router;