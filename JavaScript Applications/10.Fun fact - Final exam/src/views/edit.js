import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Fact</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="category" id="category" placeholder="Category" value=${item.category} />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value=${item.imageUrl} />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" .value=${item.description} ></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
                cols="50" .value=${item.moreInfo} ></textarea>
            <button type="submit">Post</button>
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

        // const item = formData.reduce((a, [k, v]) => {
        //     Object.assign(a, {[k]: v});
        //     return a;
        // },{});
        const item = {
            category: formData[0][1],
            imageUrl: formData[1][1], 
            description: formData[2][1], 
            moreInfo: formData[3][1]
          }           
        await updateData(itemId, item);
        event.target.reset();
        ctx.page.redirect(`/details/${itemId}`);
    }
}

