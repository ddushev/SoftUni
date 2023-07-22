import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => data.length > 0 
? html`
    <h2>Fruits</h2>
    <section id="dashboard">
    ${data.map(itemTemplate)}
    </section>`
: html`
    <h2>No fruit info yet.</h2>`


const itemTemplate = (item) => html`
<div class="fruit">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href=${`/details/${item._id}`}>More Info</a>
</div>`;

export async function showDashboard(ctx) {
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


