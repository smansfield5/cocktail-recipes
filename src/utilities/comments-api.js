import sendRequest from "./send-request";

export function add(commentData, id) {
    return sendRequest(`/api/drinks/${id}/comments`, 'POST', commentData);
}