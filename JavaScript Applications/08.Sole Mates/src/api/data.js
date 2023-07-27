import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

function getAllData() {
    return api.get('/data/shoes?sortBy=_createdOn%20desc');
}

function createData(data) {
    return api.post('/data/shoes', data);
}

function getDataById(id) {
    return api.get('/data/shoes/' + id);
}

function updateData(id, data) {
    return api.update('/data/shoes/' + id, data)
}

function deleteData(id) {
    return api.del('/data/shoes/' + id);
}

function getOwnerData(userId) {
    return api.get(`/data/shoes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

function searchData(query) {
    return api.get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
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
        searchData}