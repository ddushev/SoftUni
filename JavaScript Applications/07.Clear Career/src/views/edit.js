import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" value=${item.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${item.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" value=${item.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value=${item.description} ></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50" .value=${item.requirements} ></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${item.salary} />

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

