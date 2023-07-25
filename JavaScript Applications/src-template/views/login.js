import { login } from '../api/data.js';
import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html`

`

export function showLogin(ctx) {
    ctx.renderView(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (email == '' || password == '') {
            return alert("All fields are required!");
        }

        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}