import { html } from '../lib.js';

const homeTemplate = () => html``;


export async function showHome(ctx) {
    ctx.renderView(homeTemplate());
}


