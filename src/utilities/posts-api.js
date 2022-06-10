import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(postData) {
    return sendRequest(BASE_URL, 'POST', postData);
}