import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" value=${item.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" value=${item.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" value=${item.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" value=${item.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" value=${item.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" value=${item.value} />

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

