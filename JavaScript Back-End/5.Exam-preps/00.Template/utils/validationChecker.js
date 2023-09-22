function validationChecker (req) {
    const errors = [];

    if (req.body.name.length < 2) {
        errors.push('Name should be atleast 2 characters long!');
    }

    if (!/^(https?:\/\/)/.test(req.body.imageUrl)) {
        errors.push('ImageUrl should start with http:// or https://!');
    }

    if (Number(req.body.price) <= 0) {
        errors.push('Price should be positive number!');
    }

    if (req.body.description.length < 10) {
        errors.push('Description should be atleast 10 characters long!');
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = validationChecker;