import * as api from './api';
import { baseUrl } from "../utils/constants"


async function getData() {
    return api.get(baseUrl);
}

async function getGame(gameId) {
    return api.get(`${baseUrl}/${gameId}`);
}

async function createData(gameInfo) {
    return api.post(baseUrl, gameInfo);
}

async function createData(gameId, commentInfo) {
    return api.post(`${baseUrl}/${gameId}/comments`, commentInfo);
}

export {
    getData,
    getGame,
    createData
}