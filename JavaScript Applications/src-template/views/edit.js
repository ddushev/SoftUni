import { getDataById, updateData } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, item) => html``


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

