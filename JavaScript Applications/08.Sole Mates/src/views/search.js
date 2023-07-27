
import { searchData } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (onSubmit, data, userData) => html`
<!-- Search Page (Only for logged-in users) -->
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${data.length > 0 
                ? html`
                    ${data.map((item) => itemTemplate(item, userData))}`
                : null}
        </ul>

        ${data.length == 0 
        ? html`<h2>There are no results found.</h2>`
        : null}
    </div>
</section>`;

const itemTemplate = (item, userData) => html`
            <li class="card">
                <img src=${item.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${item.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${item.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
                ${userData ? html`
                    <a class="details-btn" href="/details/${item._id}">Details</a>` 
                    : null}
                
            </li>`;

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


