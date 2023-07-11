import {getUserData, setUserData, removeUserData} from '../util.js';

const host = 'http://localhost:3030';
async function request(endpoint, options) {
    try {
        const response = await fetch(host + endpoint, options)
        if (response.ok != true) {
            if (response.status == 403) {
                removeUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        }
        return response.json();
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

function createOptions(method, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    const userData = getUserData();
    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }
    return options;
}

async function get(endpoint){
    return request(endpoint, createOptions('get')); 
}

async function post(endpoint, data){
    return request(endpoint, createOptions('post', data)); 
}

async function update(endpoint, data){
    return request(endpoint, createOptions('put', data)); 
}

async function del(endpoint){
    return request(endpoint, createOptions('delete')); 
}

async function login(email, password) {
    const result = await request('/users/login', createOptions('post', {email, password}));
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData);
}

async function register(email, password) {
    const result = await request('/users/register', createOptions('post', {email, password}));
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData);
}

async function logout() {
    await request('/users/logout', createOptions('get'))
    removeUserData();
}

export {get, post, update, del, login, register, logout};