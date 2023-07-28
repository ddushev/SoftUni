import { deleteData, getDataById, getCounter, isLikedByUser, increaseCounter } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, item, isOwner, onLike, showLikeButton, likes) => html`
<!-- Details Page -->
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${item.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${item.title}</h2>
                <p class="post-description">Description: ${item.description}</p>
                <p class="post-address">Address: ${item.address}</p>
                <p class="post-number">Phone number: ${item.phone}</p>
                <p class="donate-Item">Donate Materials: ${likes}</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                ${isOwner
                    ? html`
                        <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                         <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                    : null}
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${showLikeButton 
                    ? html`
                        <a @click=${onLike} href="/details/${item._id}" class="donate-btn btn">Donate</a>`
                    : null} 
                </div>
            </div>
        </div>
    </div>
</section>`;


    


export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    const userId = userData && userData.id;
    // const item = await getDataById(itemId);
    // Likes logic
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
