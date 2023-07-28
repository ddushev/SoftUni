import { getOwnerData } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const myHomeTemplate = (data) => html``;

const itemTemplate = (item) => html``;

// ${data.length > 0 
//     ? html`
//         ${data.map(itemTemplate)}`
//     : null}

// ${data.length == 0 
//     ? html`<h2>There are no items added yet.</h2>`
//     : null}

export async function showMyHome(ctx) {
    const userData = getUserData();
    const data = await getOwnerData(userData.id);
    ctx.renderView(myHomeTemplate(data));
}


