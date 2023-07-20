/* debuging */
import * as api from "./api/data.js"
window.api = api;

import { logout } from "./api/data.js"
import { page, render } from "./lib.js";
import { showHome } from "./views/home.js";
import { showMemes } from "./views/meme.js";
import { showLogin as showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { getUserData } from "./util.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showProfile } from "./views/profile.js";





const root = document.querySelector('main');
updateNav();
// page.redirect('/');
page(decorateContext);
page('/', showHome);
page('/memes', showMemes);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/profile', showProfile);
page.start();

function decorateContext(ctx, next) {
    ctx.updateNav = updateNav;
    ctx.renderView = (content) => render(content, root);
    next();
}

document.querySelector('#logoutBtn').addEventListener('click', onLogout);

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}

function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('div.user').style.display = 'block';
        document.querySelector('div.guest').style.display = 'none';
        document.querySelector('#usergreet').textContent = `Welcome, ${userData.email}`;
    } else {
        document.querySelector('div.user').style.display = 'none';
        document.querySelector('div.guest').style.display = 'block';
    }
}