import { getFurniterById, updateFurniter } from '../api/data.js';
import { html, until } from '../lib.js';

const editTemplate = (furniturePromise, error) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
                <h2>${error ? html`<h2>${error}</h2>` : null}</h2>
            </div>
        </div>
        ${until(furniturePromise, html`<p>Loading &hellip;<p>`)}
`

const formTemplate = (furniture, onEdit, inputErrors, error) => html`
            <form @submit = ${onEdit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${error ? `${`form-control ${inputErrors.make ? 'is-invalid' : 'is-valid'}`}` : 'form-control'} id="new-make" type="text" name="make" value=${furniture.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${error ? `${`form-control ${inputErrors.model ? 'is-invalid' : 'is-valid'}`}` : 'form-control'} id="new-model" type="text" name="model" value=${furniture.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${error ? `${`form-control ${inputErrors.year ? 'is-invalid' : 'is-valid'}`}` : 'form-control'} id="new-year" type="number" name="year" value=${furniture.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${error ? `${`form-control ${inputErrors.description ? 'is-invalid' : 'is-valid'}`}` : 'form-control'} id="new-description" type="text" name="description" value=${furniture.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${error ? `${`form-control ${inputErrors.price ? 'is-invalid' : 'is-valid'}`}` : 'form-control'} id="new-price" type="number" name="price" value=${furniture.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${error ? `${`form-control ${inputErrors.img ? 'is-invalid' : 'is-valid'}`}` : 'form-control'} id="new-image" type="text" name="img" value=${furniture.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value=${furniture.material}>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Edit" />
                </div>
            </div>
        </form>
`

export function showEdit(ctx) {
    const furnitureId = ctx.params.id;
    initialRender();
    function initialRender() {
        ctx.renderView(editTemplate(loadFurniture(furnitureId, onEdit)));
    }

    function renderAfterEdit(furniture, onEdit, inputErrors, error) {
        ctx.renderView(editTemplate(formTemplate(furniture, onEdit, inputErrors, error), error));
    }
    
    async function onEdit(event) {
        event.preventDefault();

        const formData = [...new FormData(event.target).entries()];
        const furniture = formData.reduce((a, [k, v]) => {
            Object.assign(a, {[k]: v});
            return a;
        },{});

        let inputErrors = {};
        if (furniture.make.length < 4) {
            inputErrors.make = true;
        }
        if (furniture.model.length < 4) {
            inputErrors.model = true;
        }
        if (Number(furniture.year) < 1950 || Number(furniture.year) > 2050) {
            inputErrors.year = true;
        }
        if (furniture.description.length <= 10) {
            inputErrors.description = true;
        }
        if (Number(furniture.price) <= 0) {
            inputErrors.price = true;
        }
        if (furniture.img == '') {
            inputErrors.img = true;
        }
        try {
            if (Object.keys(inputErrors).length > 0) {
                throw new Error('Please enter valid data!')
            }
            await updateFurniter(furnitureId, furniture);
            event.target.reset();
            ctx.page.redirect(`/details/${furnitureId}`);

        } catch (error) {
            renderAfterEdit(furniture, onEdit, inputErrors, error);
        }
    }
}

async function loadFurniture(furnitureId, onEdit) {
    const furniture = await getFurniterById(furnitureId);
    return formTemplate(furniture, onEdit);
}
