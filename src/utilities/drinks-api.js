import sendRequest from "./send-request";
const BASE_URL = '/api/drinks';



export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(postData) {
    return sendRequest(BASE_URL, 'POST', postData);
}