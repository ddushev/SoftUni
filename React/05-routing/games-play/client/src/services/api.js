async function request(url, options) {
    try {
        const response = await fetch(url, options)
        if (response.status == 204) {
            return response;
        }

        if (response.ok != true) {
            throw await response.json();
        }

        return response.json();

    } catch (error) {
        throw (error);
    }
}

function createOptions(method, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

// const get = request.bind(null, 'GET');
// const post = request.bind(null, 'POST');
// const update = request.bind(null, 'PUT');
// const del = request.bind(null, 'DELETE');

function get(endpoint) {
    return request(endpoint, createOptions('get'));
}

function post(endpoint, data) {
    return request(endpoint, createOptions('post', data));
}

function update(endpoint, data) {
    return request(endpoint, createOptions('put', data));
}

function del(endpoint) {
    return request(endpoint, createOptions('delete'));
}

export {
    get,
    post,
    update,
    del
}
