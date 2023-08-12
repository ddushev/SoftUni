const Facility = require('../models/Facility');

async function getAllFacilities() {
    return Facility.find({}).lean();
}
async function createFacility(label, iconUrl) {
    console.log(label, iconUrl)
    return Facility.create({
        label,
        iconUrl
    })
}

async function addFacility(roomId, facilitiesIds) {

}

module.exports = {
    getAllFacilities,
    createFacility,
    addFacility
}