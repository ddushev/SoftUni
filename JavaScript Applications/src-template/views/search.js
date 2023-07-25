
import { getSearchData } from '../api/data.js';
import { html } from '../lib.js';

const searchTemplate = (onSubmit, data) => html``;

const itemTemplate = (item) => html``;

export async function showSearch(ctx) {

    let data = [];
    if (ctx.querystring !== '') {
        data = await getSearchData(ctx.querystring);
    }
    ctx.renderView(searchTemplate(onSubmit, data, ctx.querystring));

    function onSubmit(event){
        event.preventDefault();
        const searchInput = new FormData(event.target);
        ctx.querystring = searchInput.get('search');
        if (ctx.querystring == '') {
            return alert('Please enter a search query!');
        }
        ctx.page.redirect('/search?' + ctx.querystring);
    }
}


