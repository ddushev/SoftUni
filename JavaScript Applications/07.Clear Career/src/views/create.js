import { createData } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

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
