
import { getSearchData } from '../api/data.js';
import { html } from '../lib.js';

const searchTemplate = (onSubmit, data, query) => html`
<!-- Search page -->
<section id="search">

    <div class="form">
        <h2>Search</h2>
        <form @submit=${onSubmit} class="search-form">
            <input type="text" name="search" id="search-input" value=${query} />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        ${data.length == 0 
            ? html`<p class="no-result">No result.</p>`
            : data.map(itemTemplate)}
    </div>
</section>
`;

const itemTemplate = (item) => html`
<div class="fruit">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href=${`/details/${item._id}`}>More Info</a>
</div>`;

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


