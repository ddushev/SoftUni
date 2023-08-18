const { hasRole } = require('../middlewares/guards');
const { createFacility, getAllFacilities, addFacility } = require('../services/facilityService');
const { getById } = require('../services/roomService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parser');

const facilityController = require('express').Router();

facilityController.get('/create', hasRole('admin'), (req, res) => {
    res.render('createFacility', {
        title: 'Create New Facility'
    });
});

facilityController.post('/create', hasRole('admin'),
    body('label')
        .trim()
        .notEmpty().withMessage('Label is required'),
    body('iconUrl')
        .trim(),
    async (req, res) => {
        const { errors } = validationResult(req);
        try {
            if (errors.length > 0) {
                throw errors
            }
            await createFacility(req.body.label, req.body.iconUrl);
            res.redirect('/facility/create');
        } catch (error) {
            console.log(error);
            res.render('createFacility', {
                title: 'Create New Facility',
                error: parseError(error),
                body: req.body
            });
        }
    })

facilityController.get('/:roomId/decorateRoom', async (req, res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    if (!req.user || room.owner != req.user._id) {
        return res.redirect('/auth/login');
    }
    const facilities = await getAllFacilities();
    facilities.forEach(f => {
        if ((room.facilities || []).some(id => id._id.toString() == f._id.toString())) {
            f.checked = true;
        }
    })
    res.render('decorate', {
        title: 'Add Facility',
        room,
        facilities
    })
})

facilityController.post('/:roomId/decorateRoom', async (req, res) => {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    if (!req.user || room.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await addFacility(req.params.roomId, Object.keys(req.body));
    res.redirect('/facility/' + req.params.roomId + '/decorateRoom');

})

module.exports = facilityController;

