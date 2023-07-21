import { getOwnerData } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const myHomeTemplate = (data) => html`
<section id="my-books-page" class="my-books">
    <h1>Dashboard</h1>
    ${data.length > 0 
        ? html`
            <ul class="my-books-list">
                ${data.map(itemTemplate)}
            </ul>`
        : html`
            <p class="no-books">No books in database!</p>`} 
</section>`;

const itemTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src=${item.imageUrl}></p>
    <a class="button" href=${`/details/${item._id}`}>Details</a>
</li>`;

export async function showMyHome(ctx) {
    const userData = getUserData();
    const data = await getOwnerData(userData.id);
    ctx.renderView(myHomeTemplate(data));
}


