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

function createLike(bookId) {
    return api.post('/data/likes', {bookId})
}

function getAllLikes(bookId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

function isLiked(bookId, userId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}


export {login, register, logout, createData, getAllData, getDataById, updateData, deleteData, getOwnerData, createLike, getAllLikes, isLiked}