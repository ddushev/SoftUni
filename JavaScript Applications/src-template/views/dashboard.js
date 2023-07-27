import { getAllData } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (data) => html``;

// ${data.length > 0 
//     ? html`
//         ${data.map(itemTemplate)}`
//     : null}

// ${data.length == 0 
//     ? html`<h2>There are no items added yet.</h2>`
//     : null}

const itemTemplate = (item) => html``;

export async function showDashboard(ctx) {
    const data = await getAllData();
    ctx.renderView(dashboardTemplate(data));
}


