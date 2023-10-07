import * as api from './api';
import { baseUrl } from "../utils/constants"


async function getData() {
    return api.get(baseUrl);
}

async function createData(gameInfo) {
    return api.post(baseUrl, gameInfo);
}

export {
    getData,
    createData
}