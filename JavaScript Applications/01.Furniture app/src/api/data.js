import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

async function createFurniter(data) {
    return api.post('/data/catalog', data);
}

async function getAllFurniter() {
    return api.get('/data/catalog');
}

async function getFurniterById(id) {
    return api.get('/data/catalog/' + id);
}

async function updateFurniter(id, data) {
    return api.update('/data/catalog/' + id, data)
}

async function deleteFurniter(id) {
    return api.del('/data/catalog/' + id);
}

async function getOwnersFurniter(userId) {
    return api.get(`/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export {login, register, logout, createFurniter, getAllFurniter, getFurniterById, updateFurniter, deleteFurniter, getOwnersFurniter}