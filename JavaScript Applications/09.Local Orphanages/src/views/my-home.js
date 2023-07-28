import { getOwnerData } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const myHomeTemplate = (data) => html`
<!-- My Posts -->
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->

    ${data.length > 0 
    ? html`
        <div class="my-posts">
            ${data.map(itemTemplate)}
        </div>`
    : html`
    <h1 class="title no-posts-title">You have no posts yet!</h1>`}

</section>`;


const itemTemplate = (item) => html`
        <div class="post">
            <h2 class="post-title">${item.title}</h2>
            <img class="post-image" src=${item.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${item._id}" class="details-btn btn">Details</a>
            </div>
        </div>`;

export async function showMyHome(ctx) {
    const userData = getUserData();
    const data = await getOwnerData(userData.id);
    ctx.renderView(myHomeTemplate(data));
}


