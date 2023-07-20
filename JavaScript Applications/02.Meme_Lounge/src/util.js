function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

function removeUserData() {
    sessionStorage.removeItem('userData');
}

function notify(message) {
    const errorBox = document.querySelector('#errorBox');
    const messageBox = errorBox.querySelector('span');
    errorBox.style.display = 'block';
    messageBox.textContent = message;

    setTimeout(() => errorBox.style.display = 'none', 3000);
}

export {getUserData, setUserData, removeUserData, notify}