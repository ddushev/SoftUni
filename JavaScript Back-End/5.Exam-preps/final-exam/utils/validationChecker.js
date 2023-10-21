function validationChecker (req) {
    const errors = [];

    //TODO Change validation checks for the edit and create functionality
    if (req.body.name.length < 10) {
        errors.push('Name should be atleast 10 characters long!');
    }

    if (req.body.type.length < 2) {
        errors.push('Type should be atleast 2 characters long!');
    }

    if (req.body.damages.length < 10) {
        errors.push('Damages should be atleast 10 characters long!');
    }

    if (!/^(https?:\/\/)/.test(req.body.imageUrl)) {
        errors.push('Image should start with http:// or https://');
    }

    if (req.body.description.length < 10 || req.body.description.length > 200) {
        errors.push('Description should be atleast 10 and not more than 200 characters long!');
    }

    if (Number(req.body.production) < 1900 ||  Number(req.body.production) > 2023) {
        errors.push('Production should be positive between 1900 and 2023!');
    }

    if (!Number(req.body.price) > 0) {
        errors.push('Price should be positive number!');
    }

    if (!Number(req.body.exploitation) > 0) {
        errors.push('Exploitation should be positive number!');
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = validationChecker;