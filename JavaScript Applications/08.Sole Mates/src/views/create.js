import { createData } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

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
