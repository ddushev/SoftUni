import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
    ${data.length > 0 
    ? html`
    ${data.map(itemTemplate)}`
    : null} 
    </div>

     ${data.length == 0 
    ? html`
        <h1 class="title no-posts-title">No posts yet!</h1>`
    : null}

</section>`;


const itemTemplate = (item) => html`
        <div class="post">
            <h2 class="post-title">${item.title}</h2>
            <img class="post-image" src=${item.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${item._id}" class="details-btn btn">Details</a>
            </div>
        </div>`;

export async function showDashboard(ctx) {
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


