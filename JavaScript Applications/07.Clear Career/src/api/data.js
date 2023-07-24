import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/offers?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/offers', data);
}

function getDataById(id) {
    return api.get('/data/offers/' + id);
}

function updateData(id, data) {
    return api.update('/data/offers/' + id, data)
}

function deleteData(id) {
    return api.del('/data/offers/' + id);
}


function increaseCounter(offerId) {
    return api.post('/data/applications', {offerId});
}

function getCounter(offerId) {
    return api.get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}

function isLikedByUser(offerId, userId) {
    return api.get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}




export {login,
        register,
        logout,
        createData,
        getAllData,
        getDataById,
        updateData,
        deleteData,
        increaseCounter,
        getCounter,
        isLikedByUser}