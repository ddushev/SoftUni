import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Fruit Name" value=${item.name} />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" value=${item.imageUrl} />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                cols="50">${item.description}</textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${item.nutrition}</textarea>
            <button type="submit">post</button>
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

