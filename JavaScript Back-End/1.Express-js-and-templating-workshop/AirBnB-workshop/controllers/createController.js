const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Host new accommodation'
    })
})

module.exports = router;

