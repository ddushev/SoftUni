async function request(method, url, data) {
    try {
        const response = await fetch(url, {
            method
        })
        if (response.status == 204) {
            return response;
        }

        return response.json();

    } catch (error) {
        console.error(error.message);
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const update = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    update,
    del
}
