import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/posts?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/posts', data);
}

function getDataById(id) {
    return api.get('/data/posts/' + id);
}

function updateData(id, data) {
    return api.update('/data/posts/' + id, data)
}

function deleteData(id) {
    return api.del('/data/posts/' + id);
}

function getOwnerData(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}


function increaseCounter(postId) {
    return api.post('/data/donations', {postId});
}

function getCounter(postId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

function isLikedByUser(postId, userId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
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
        isLikedByUser}