import { getAllFurniter, getOwnersFurniter } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const catalogTemplate = (dataPromise, isUserCatalog) => html`
<div class="row space-top">
    <div class="col-md-12">
        ${isUserCatalog ? html`
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        ` : html`
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        `}
    </div>
</div>
<div class="row space-top">
    ${until(dataPromise, html`<p>Loading &hellip;<p>`)}
</div> 
`;
const furniterTemplate = (furniter) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src="${furniter.img}" />
                <p>${furniter.description}</p>
                <footer>
                    <p>Price: <span>${furniter.price} $</span></p>
                </footer>
                <div>
                    <a href=${`/details/${furniter._id}`} class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>    
`

export function showCatalog(ctx) {
    const isUserCatalog = ctx.pathname == '/my-furniture'
    ctx.renderView(catalogTemplate(loadItems(isUserCatalog), isUserCatalog));
}

async function loadItems(isUserCatalog) {
    let data = [];
    if (isUserCatalog) {
        const userId = getUserData() ? getUserData().id : null;
        data = await getOwnersFurniter(userId);
    }else {
        data = await getAllFurniter();
    }
     
    return data.map(furniterTemplate);
}

