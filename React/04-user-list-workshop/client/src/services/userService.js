const baseUrl = 'http://localhost:3005/api/users'

export async function getUsers() {
    const resp = await fetch(baseUrl);
    return resp.json();
}