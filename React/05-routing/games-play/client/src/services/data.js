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

    async function editGame(gameInfo, gameId) {
        return api.update(`${baseUrl}/data/games/${gameId}`, gameInfo);
    }

    async function deleteGame(gameId) {
        return api.del(`${baseUrl}/data/games/${gameId}`);
    }

    async function createComment(commentInfo) {
        return api.post(`${baseUrl}/data/comments/`, commentInfo);
    }

    async function getComments(gameId) {
        const match = encodeURIComponent(`gameId="${gameId}"`);
        const relations = encodeURIComponent(`author=_ownerId:users`)
        return api.get(`${baseUrl}/data/comments?where=${match}&load=${relations}`);
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
        editGame,
        deleteGame,
        createComment,
        getComments,
        login,
        register,
        logout
    }
}

