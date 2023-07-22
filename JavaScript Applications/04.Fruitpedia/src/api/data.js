import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/fruits?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/fruits', data);
}

function getDataById(id) {
    return api.get('/data/fruits/' + id);
}

function updateData(id, data) {
    return api.update('/data/fruits/' + id, data)
}

function deleteData(id) {
    return api.del('/data/fruits/' + id);
}

function getSearchData(query) {
    return api.get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}


export {login, register, logout, createData, getAllData, getDataById, updateData, deleteData, getSearchData}