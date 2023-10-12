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

function createOptions(method, data, token) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }else {
        const persistedStateSerialized = localStorage.getItem('auth');
        const auth = JSON.parse(persistedStateSerialized);
        if (auth?.accessToken) {
            options.headers['X-Authorization'] = auth.accessToken;
        }
    }

    return options;
}

// const get = request.bind(null, 'GET');
// const post = request.bind(null, 'POST');
// const update = request.bind(null, 'PUT');
// const del = request.bind(null, 'DELETE');



export function requestFactory(token) {
    function get(endpoint) {
        return request(endpoint, createOptions('get', null, token));
    }

    function post(endpoint, data) {
        return request(endpoint, createOptions('post', data, token));
    }

    function update(endpoint, data) {
        return request(endpoint, createOptions('put', data, token));
    }

    function del(endpoint) {
        return request(endpoint, createOptions('delete', null, token));
    }
    return {
        get,
        post,
        update,
        del
    }
}


