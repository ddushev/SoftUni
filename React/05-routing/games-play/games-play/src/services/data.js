import * as api from './api';
import { baseUrl } from "../utils/constants"


async function getData() {
    return api.get(baseUrl);
}

export {
    getData
}