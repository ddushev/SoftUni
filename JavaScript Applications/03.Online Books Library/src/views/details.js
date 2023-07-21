import { deleteData, getDataById, createLike, getAllLikes, isLiked } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, onLike, item, isOwner, showLikeButton, likes) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${item.title}</h3>
    <p class="type">Type: ${item.type}</p>
    <p class="img"><img src=${item.imageUrl}></p>
    <div class="actions">
        ${isOwner 
            ? html`
                <a class="button" href=${`/edit/${item._id}`}>Edit</a>
                <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : null}

        ${showLikeButton 
            ? html`
                <a @click=${onLike} class="button" href="javascript:void(0)"}>Like</a>`
            : null}
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: ${likes}</span>
        </div>
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${item.description}</p>
</div>
</section>`;


export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    const userId = userData && userData.id;
    const [item, likes, isLikedByUser] = await Promise.all([getDataById(itemId), getAllLikes(itemId), 
            userData ? isLiked(itemId, userId) : 0]);
    
    const isOwner = userData && userId == item._ownerId;
    const showLikeButton = userData && userId != item._ownerId && !isLikedByUser;
    ctx.renderView(detailsTemplate(onDelete, onLike, item, isOwner, showLikeButton, likes));

    async function onDelete() {
        await deleteData(itemId);
        ctx.page.redirect('/');
    }

    async function onLike() {
        await createLike(itemId);
        ctx.page.redirect('/details/' + itemId);
    }
}
