import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/facts?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/facts', data);
}

function getDataById(id) {
    return api.get('/data/facts/' + id);
}

function updateData(id, data) {
    return api.update('/data/facts/' + id, data)
}

function deleteData(id) {
    return api.del('/data/facts/' + id);
}

function increaseCounter(factId) {
    return api.post('/data/likes', {factId});
}

function getCounter(factId) {
    return api.get(`/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`);
}

function isLikedByUser(factId, userId) {
    return api.get(`/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
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