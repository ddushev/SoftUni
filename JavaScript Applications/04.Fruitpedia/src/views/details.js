import { deleteData, getDataById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, item, isOwner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${item.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${item.nutrition}</p>
            </div>
            ${isOwner 
                ? html`
                    <div id="action-buttons">
                        <a href=${`/edit/${item._id}`} id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>`
                : null}
        </div>
    </div>
</section>`;


export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    const item = await getDataById(itemId);
    const isOwner = userData && userData.id == item._ownerId;
    ctx.renderView(detailsTemplate(onDelete, item, isOwner));

    async function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this item?')
        if (confirmation) {
            await deleteData(itemId);
            ctx.page.redirect('/dashboard');
        }
    }
}
