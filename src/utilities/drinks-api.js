import sendRequest from "./send-request";
const BASE_URL = '/api/drinks';



export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}