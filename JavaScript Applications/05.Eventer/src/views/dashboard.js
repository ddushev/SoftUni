import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => data.length > 0 
    ? html`
        <!-- Dashboard page -->
        <h2>Current Events</h2>
        <section id="dashboard">
            <!-- Display a div with information about every post (if any)-->
            ${data.map(itemTemplate)}
        </section>`
    : html`
        <!-- Display an h4 if there are no posts -->
        <h4>No Events yet.</h4>`

const itemTemplate = (item) => html`
    <div class="event">
        <img src=${item.imageUrl} alt="example1" />
        <p class="title">
            ${item.name}
        </p>
        <p class="date">${item.date}</p>
        <a class="details-btn" href=${`/details/${item._id}`}>Details</a>
    </div>`;

export async function showDashboard(ctx) {
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


