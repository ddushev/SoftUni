import { register } from '../api/data.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
`

export function showRegister(ctx) {
   ctx.renderView(registerTemplate(onSubmit));

   async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const rePass = formData.get('re-password');
        if ([...formData.values()].some(field => field == '')) {
            return alert('All fields are required!');
        }

        if (password != rePass) {
            return alert('Passwords must match!');
        }
        
        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/dashboard');
   }
}