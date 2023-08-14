const router = require('express').Router();
const { create } = require('../services/roomService');


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host new accommodation'
    })
})

router.post('/', async (req, res) => {

    try {
        const result = await create(req.body);
        res.redirect('/catalog/' + result._id);
    } catch (error) {
        res.render('create', {
            title: 'Request Error',
            error: error.message.split('\n')
        })
    }

})

module.exports = router;

