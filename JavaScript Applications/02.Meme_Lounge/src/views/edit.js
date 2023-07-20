import { getById, update } from "../api/data.js";
import {html} from "../lib.js"
import { notify } from "../util.js";

const detailsTemplate = (onSubmit, meme) => html`
    <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
    <section id="edit-meme">
        <form @submit = ${onSubmit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" value=${meme.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description">${meme.description}</textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${meme.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`

export async function showEdit(ctx) {
    const memeData = await getById(ctx.params.id);
    ctx.renderView(detailsTemplate(onSubmit, memeData));

    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        formData = [...formData.entries()].reduce((a, [k, v]) => {
            a[k] = v;
            return a;
        }, {})
        if (formData.title == '' || formData.description == '' || formData.imageUrl == '') {
            notify('All fields are required!');
            return;
        }
        await update(ctx.params.id, formData);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}
