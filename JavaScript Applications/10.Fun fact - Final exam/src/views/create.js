import { createData } from '../api/data.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add Fact</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="category" id="category" placeholder="Category" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
                cols="50"></textarea>
            <button type="submit">Add Fact</button>
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

        // const inputData = formData.reduce((a, [k, v]) => {
        //     Object.assign(a, {[k]: v});
        //     return a;
        // },{});

        const inputData = {
            category: formData[0][1],
            imageUrl: formData[1][1], 
            description: formData[2][1], 
            moreInfo: formData[3][1]
          }   

        await createData(inputData);
        event.target.reset();
        ctx.page.redirect('/dashboard');

    }
}
