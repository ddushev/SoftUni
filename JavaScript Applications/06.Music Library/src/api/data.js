import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/albums?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/albums', data);
}

function getDataById(id) {
    return api.get('/data/albums/' + id);
}

function updateData(id, data) {
    return api.update('/data/albums/' + id, data)
}

function deleteData(id) {
    return api.del('/data/albums/' + id);
}


function increaseCounter(albumId) {
    return api.post('/data/likes', {albumId});
}

function getCounter(albumId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

function isLikedByUser(albumId, userId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
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