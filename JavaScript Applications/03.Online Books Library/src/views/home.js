import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const homeTemplate = (data) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${data.length > 0 
        ? html`
            <ul class="other-books-list">
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

export async function showHome(ctx) {
    const data = await getAllData();
    ctx.renderView(homeTemplate(data));
}


