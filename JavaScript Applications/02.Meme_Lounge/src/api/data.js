import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

async function create(data) {
    return api.post('/data/memes', data);
}

async function getAllData() {
    return api.get('/data/memes?sortBy=_createdOn%20desc');
}

async function getById(id) {
    return api.get('/data/memes/' + id);
}

async function update(id, data) {
    return api.update('/data/memes/' + id, data);
}

async function del(id) {
    return api.del('/data/memes/' + id);
}

async function getOwnerData(userId) {
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export {login, register, logout, create, getAllData, getById, update, del, getOwnerData}