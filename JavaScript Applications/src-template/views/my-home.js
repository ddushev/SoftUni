import { getOwnerData } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const myHomeTemplate = (data) => html``;

const itemTemplate = (item) => html``;

export async function showMyHome(ctx) {
    const userData = getUserData();
    const data = await getOwnerData(userData.id);
    ctx.renderView(myHomeTemplate(data));
}


