import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => html`
<!-- Dashboard page -->
<h2>Fun Facts</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${data.length > 0 
    ? html`
        ${data.map(itemTemplate)}`
    : null}
</section>
<!-- Display an h2 if there are no posts -->
    ${data.length == 0 
        ? html`<h2>No Fun Facts yet.</h2>`
        : null}`;

const itemTemplate = (item) => html`
    <div class="fact">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="category">${item.category}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>`;

export async function showDashboard(ctx) {
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


