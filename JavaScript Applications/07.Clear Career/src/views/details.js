import { deleteData, getDataById, getCounter, isLikedByUser, increaseCounter } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, item, isOwner, onLike, showLikeButton, likes) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.title}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${item.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${likes}</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${isOwner 
        ? html`
            <a href="/edit/${item._id}"  id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
        : null}
        ${showLikeButton
        ? html`
            <a @click=${onLike} href="javascript:void(0)" id="apply-btn">Apply</a>`
        : null}
        </div>
    </div>
</section>`;



export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    const userId = userData && userData.id;

    const [item, likes, isLiked] = await Promise.all([getDataById(itemId), getCounter(itemId), 
            userData ? isLikedByUser(itemId, userId) : 0]);
    const showLikeButton = userData && userId != item._ownerId && !isLiked;


    const isOwner = userData && userId == item._ownerId;

    ctx.renderView(detailsTemplate(onDelete, item, isOwner, onLike, showLikeButton, likes));

    async function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this item?')
        if (confirmation) {
            await deleteData(itemId);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        await increaseCounter(itemId);
        ctx.page.redirect('/details/' + itemId);
    }


}
