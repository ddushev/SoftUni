import { deleteData, getDataById, getCounter, isLikedByUser, increaseCounter } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, onLike, item, isOwner, showLikeButton, likes) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${item.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${item.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
        <div id="action-buttons">
            ${showLikeButton 
            ? html`
                <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
            : null}
            ${isOwner
            ? html`
                <a href=${"/edit/" + item._id} id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
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
    
    const isOwner = userData && userId == item._ownerId;
    const showLikeButton = userData && userId != item._ownerId && !isLiked;
    ctx.renderView(detailsTemplate(onDelete, onLike, item, isOwner, showLikeButton, likes));

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
