import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/books?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/books', data);
}

function getDataById(id) {
    return api.get('/data/books/' + id);
}

function updateData(id, data) {
    return api.update('/data/books/' + id, data)
}

function deleteData(id) {
    return api.del('/data/books/' + id);
}

function getOwnerData(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

function searchData(query) {
    return api.get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}

function increaseCounter(eventId) {
    return api.post('/data/going', {eventId});
}

function getCounter(eventId) {
    return api.get(`/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

function isLikedByUser(eventId, userId) {
    return api.get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}




export {login,
        register,
        logout,
        createData,
        getAllData,
        getDataById,
        updateData,
        deleteData,
        getOwnerData,
        searchData,
        increaseCounter,
        getCounter,
        isLikedByUser}