import { register } from '../api/data.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html`

`

export function showRegister(ctx) {
   ctx.renderView(registerTemplate(onSubmit));

   async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const rePass = formData.get('confirm-pass');
        if ([...formData.values()].some(field => field == '')) {
            return alert('All fields are required!');
        }

        if (password != rePass) {
            return alert('Passwords must match!');
        }
        
        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
   }
}