
import { searchData } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (onSubmit, data, userData) => html``;

const itemTemplate = (item, userData) => html``;

// ${data.length > 0 
//     ? html`
//         ${data.map((item) => itemTemplate(item, userData))}`
//     : null}

// ${data.length == 0 
//     ? html`<h2>There are no results found.</h2>`
//     : null}

export async function showSearch(ctx) {
    const userData = getUserData();
    let data = [];
    if (ctx.querystring !== '') {
        data = await searchData(ctx.querystring);
    }
    ctx.renderView(searchTemplate(onSubmit, data, userData));

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


