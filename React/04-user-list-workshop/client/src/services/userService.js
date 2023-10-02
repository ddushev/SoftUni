const baseUrl = 'http://localhost:3005/api/users'

export async function getUsers() {
    const resp = await fetch(baseUrl);
    return resp.json();
}

export async function getUser(id) {
    const resp = await fetch(`${baseUrl}/${id}`);
    return resp.json();
}

export async function createUser(data) {
    const { country, city, street, streetNumber, ...userData} = data;
    userData.address = {
        country,
        city,
        street,
        streetNumber
    }
    const resp = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })

    return resp.json();
}

export async function deleteUser(id) {
    const resp = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
    })

    return resp.json();
}