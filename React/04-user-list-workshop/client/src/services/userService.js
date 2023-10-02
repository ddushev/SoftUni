const baseUrl = 'http://localhost:3005/api/users'

export async function getUsers() {
    const resp = await fetch(baseUrl);
    return resp.json();
}

export async function getUser(id) {
    const resp = await fetch(`${baseUrl}/${id}`);
    return resp.json();
}