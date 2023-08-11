const { getAll, getById } = require('../services/accomodationService');

const router = require('express').Router();

router.get('/', (req,res) => {
    const search = req.query.search || '';
    const rooms = getAll(search);
    res.render('catalog', {
        title: 'All accomodations',
        rooms,
        search
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
        res.render('roomNotFound' , {
            title: 'Accommodation not found',
            id
        })
    }
    
})

module.exports = router;