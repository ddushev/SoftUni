async function login(username, password) {
    return new Promise((res, rej) => {
        if (username.toLowerCase() == 'peter' && password == '123456') {
            res({
                _id: '123456asdf',
                username: 'Peter',
                roles: ['user']
            });
        }else {
            rej(new Error('Invalid username or password'))
        }
    })
}

module.exports = {
    login
}