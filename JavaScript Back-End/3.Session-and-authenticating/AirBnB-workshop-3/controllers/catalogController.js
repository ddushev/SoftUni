const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();

router.get('/', async (req,res) => {

    const search = req.query.search || '';
    const rooms = await getAll(search);
    res.render('catalog', {
        title: 'All accomodations',
        rooms,
        search
    });
})

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const room = await getById(id);
    if (req.user && req.user._id == room.owner) {
        room.isOwner = true;
    }
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