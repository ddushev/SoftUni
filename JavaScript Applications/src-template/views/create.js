import { createData } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html``;

export function showCreate(ctx) {
    
    ctx.renderView(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = [...new FormData(event.target).entries()];

        if ([...new FormData(event.target).values()].some(field => field == '')) {
            return alert('All fields are required!');
        }

        const inputData = formData.reduce((a, [k, v]) => {
            Object.assign(a, {[k]: v});
            return a;
        },{});

        await createData(inputData);
        event.target.reset();
        ctx.page.redirect('/dashboard');

    }
}
