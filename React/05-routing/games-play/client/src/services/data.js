import * as api from './api';
import { baseUrl } from "../utils/constants"


async function getData() {
    return api.get(`${baseUrl}/jsonstore/games`);
}

async function getGame(gameId) {
    return api.get(`${baseUrl}/jsonstore/games/${gameId}`);
}

async function createData(gameInfo) {
    return api.post(`${baseUrl}/jsonstore/games`, gameInfo);
}

async function createComment(gameId, commentInfo) {
    return api.post(`${baseUrl}/jsonstore/games/${gameId}/comments`, commentInfo);
}

async function login(loginData) {
    return api.post(`${baseUrl}/users/login`, loginData);
}

async function register(registerData) {
    return api.post(`${baseUrl}/users/register`, registerData);
}


export {
    getData,
    getGame,
    createData,
    createComment,
    login,
    register
}