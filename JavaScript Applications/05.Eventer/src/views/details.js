import { deleteData, getCounter, getCounterByUser, getDataById, increaseCounter } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, item, isOwner, onGoing, showGoing, counter) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.name}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-date">
            Date:<span id="date">${item.date}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
                <span>${item.description}</span>
            </div>

        </div>

        <h3>Going: <span id="go">${counter}</span> times.</h3>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${isOwner 
            ? html`
                <a href=${`/edit/${item._id}`} id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : null}
        ${showGoing 
            ? html`
                <!--Bonus - Only for logged-in users ( not authors )-->
                <a @click=${onGoing} href="javascript:void(0)" id="go-btn">Going</a>` 
            : null}
        </div>
    </div>
</section>`;


export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    // const item = await getDataById(itemId);
    // const counter = await getCounter(itemId);
    // const isGoing = await getCounterByUser(itemId, userData.id);
    const [item, counter, isGoing] = await Promise.all([getDataById(itemId), getCounter(itemId), userData ? getCounterByUser(itemId, userData.id) : 0])
    const isOwner = userData && userData.id == item._ownerId;
    const showGoing = userData && !isOwner && !isGoing;
    
    ctx.renderView(detailsTemplate(onDelete, item, isOwner, onGoing, showGoing, counter));

    async function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this item?')
        if (confirmation) {
            await deleteData(itemId);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onGoing() {
        await increaseCounter(itemId);
        ctx.page.redirect(`/details/` + itemId);
    }
}
