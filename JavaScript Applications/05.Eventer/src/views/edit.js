import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Event</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Event" value=${item.name} />
            <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" value=${item.imageUrl} />
            <input type="text" name="category" id="event-category" placeholder="Category" value=${item.category} />


            <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50" .value=${item.description} ></textarea>

            <label for="date-and-time">Event Time:</label>
            <input type="text" name="date" id="date" placeholder="When?" value=${item.date} />

            <button type="submit">Edit</button>
        </form>
    </div>
</section>`


export async function showEdit(ctx) {
    const itemId = ctx.params.id;
    const item = await getDataById(itemId);
    ctx.renderView(editTemplate(onSubmit, item));

    
    async function onSubmit(event) {
        event.preventDefault();

        const formData = [...new FormData(event.target).entries()];

        if ([...new FormData(event.target).values()].some(field => field == '')) {
            return alert("All fields are required!");
        }

        const item = formData.reduce((a, [k, v]) => {
            Object.assign(a, {[k]: v});
            return a;
        },{});
        await updateData(itemId, item);
        event.target.reset();
        ctx.page.redirect(`/details/${itemId}`);
    }
}

