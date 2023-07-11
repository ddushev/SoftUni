import { deleteFurniter, getFurniterById } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (furniturePromise) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            ${until(furniturePromise, html`<p>Loading &hellip;</p>`)}
        </div>
`

const furnitureTemplate = (furniture, isOwner, onDelete) => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${furniture.img}/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            <p>Material: <span>${furniture.material}</span></p>
            ${isOwner 
                ? html`
                    <div>
                        <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
                        <a @click = ${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
                    </div>
                `:
                    null}
        </div>
`

export function showDetails(ctx) {
    const furnitureId = ctx.params.id;
    ctx.renderView(detailsTemplate(loadFurniture(furnitureId, onDelete)));

    async function onDelete() {
        await deleteFurniter(furnitureId);
        ctx.page.redirect('/');
    }
}

async function loadFurniture(furnitureId, onDelete) {
    const furniture = await getFurniterById(furnitureId);
    const userData = getUserData();
    const isOwner = userData ? userData.id == furniture._ownerId : null;
    return furnitureTemplate(furniture, isOwner, onDelete);
}