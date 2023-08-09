const router = require('express').Router();
const { create } = require('../services/accomodationService');


router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host new accommodation'
    })
})

router.post('/', async (req, res) => {

    try {
        const result = await create(req.body);
        res.redirect('/catalog/' + result.id);
    } catch (error) {
        res.render('/create', {
            title: 'Request Error'
        })
    }

})

module.exports = router;

