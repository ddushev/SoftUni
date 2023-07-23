import { createData } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add Event</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="name" id="name" placeholder="Event" />
            <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
            <input type="text" name="category" id="event-category" placeholder="Category" />


            <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

            <input type="text" name="date" id="date" placeholder="When?" />

            <button type="submit">Add</button>
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
