import { del, getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (onDelete, meme, isOwner) => html`
    <!-- Details Meme Page (for guests and logged users) -->
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}
        </h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${meme.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                    ${meme.description}
                </p>
                ${isOwner ? html`
                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    <a class="button warning" href=${`/edit/${meme._id}`}>Edit</a>
                    <button @click = ${onDelete} class="button danger">Delete</button>
                ` : null}
            </div>
        </div>
    </section>
`

export async function showDetails(ctx) {
    const memeData = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData && userData.id == memeData._ownerId;
    ctx.renderView(detailsTemplate(onDelete, memeData, isOwner));

    async function onDelete(event) {
        event.preventDefault();
        const confirmation = confirm('Please confirm you want to delete this meme!');
        if (confirmation) {
            await del(ctx.params.id);
            ctx.page.redirect('/memes');
        }

    }
}


