import { deleteData, getDataById, getCounter, isLikedByUser, increaseCounter } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDelete, item, isOwner, onLike, showLikeButton, likes) => html``;

    // ${showLikeButton 
    //     ? html`
    //        `
    //     : null}
    
    //     ${isOwner
    //     ? html`
    //         `
    //     : null}

export async function showDetails(ctx) {
    const userData = getUserData();
    const itemId = ctx.params.id;
    const userId = userData && userData.id;
    const item = await getDataById(itemId);
    // Likes logic
    // const [item, likes, isLiked] = await Promise.all([getDataById(itemId), getCounter(itemId), 
    //         userData ? isLikedByUser(itemId, userId) : 0]);
    // const showLikeButton = userData && userId != item._ownerId && !isLiked;


    const isOwner = userData && userId == item._ownerId;

    ctx.renderView(detailsTemplate(onDelete, item, isOwner, onLike, showLikeButton, likes));

    async function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this item?')
        if (confirmation) {
            await deleteData(itemId);
            ctx.page.redirect('/dashboard');
        }
    }

    // async function onLike() {
    //     await increaseCounter(itemId);
    //     ctx.page.redirect('/details/' + itemId);
    // }


}
