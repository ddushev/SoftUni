import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/events?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/events', data);
}

function getDataById(id) {
    return api.get('/data/events/' + id);
}

function updateData(id, data) {
    return api.update('/data/events/' + id, data)
}

function deleteData(id) {
    return api.del('/data/events/' + id);
}

function getOwnerData(userId) {
    return api.get(`/data/events?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

function increaseCounter(eventId) {
    return api.post('/data/going', {eventId});
}

function getCounter(eventId) {
    return api.get(`/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

function getCounterByUser(eventId, userId) {
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
        increaseCounter,
        getCounter,
        getCounterByUser,
    }