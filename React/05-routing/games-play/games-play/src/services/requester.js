async function request(method, url) {
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

const getData = request.bind(null, 'GET');
const createData = request.bind(null, 'POST');
const updateData = request.bind(null, 'PUT');
const deleteData = request.bind(null, 'DELETE');

export { getData };