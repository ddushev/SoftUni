import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => html`
<!-- Dashboard page -->
<section id="dashboard">
    <h2>Job Offers</h2>

    ${data.length > 0 
        ? html`
            ${data.map(itemTemplate)}`
        : html`
            <h2>No offers yet.</h2>`}    
</section>`;



const itemTemplate = (item) => html`
    <div class="offer">
        <img src=${item.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${item.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>`;

export async function showDashboard(ctx) {
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


