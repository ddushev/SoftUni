import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${item.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" value=${item.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${item.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" value=${item.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" value=${item.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${item.sales} />

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

