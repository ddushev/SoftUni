import { requestFactory } from './api';
import { baseUrl } from "../utils/constants"

export function dataFactory(token) {
    const api = requestFactory(token);

    async function getData() {
        return api.get(`${baseUrl}/data/games`);
    }

    async function getGame(gameId) {
        return api.get(`${baseUrl}/data/games/${gameId}`);
    }

    async function createData(gameInfo) {
        return api.post(`${baseUrl}/data/games`, gameInfo);
    }

    async function deleteGame(gameId) {
        return api.del(`${baseUrl}/data/games/${gameId}`);
    }

    async function createComment(gameId, commentInfo) {
        //TODO Fix createComment request
        return api.post(`${baseUrl}/data/games/${gameId}/comments`, commentInfo);
    }

    async function login(loginData) {
        return api.post(`${baseUrl}/users/login`, loginData);
    }

    async function register(registerData) {
        return api.post(`${baseUrl}/users/register`, registerData);
    }

    async function logout() {
        return api.get(`${baseUrl}/users/logout`);
    }

    return {
        getData,
        getGame,
        createData,
        deleteGame,
        createComment,
        login,
        register,
        logout
    }
}

