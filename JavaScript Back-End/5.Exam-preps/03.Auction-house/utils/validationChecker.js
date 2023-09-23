function validationChecker (req) {
    const errors = [];

    // if (Number(req.body.price) <= 0) {
    //     errors.push('Price should be positive number!');
    // }
    
    if (req.body.species.length < 3) {
        errors.push('Species should be atleast 3 characters long!');
    }

    if (req.body.skinColor.length < 3) {
        errors.push('Skin color should be atleast 3 characters long!');
    }

    if (req.body.eyeColor.length < 3) {
        errors.push('Eye color should be atleast 3 characters long!');
    }

    if (req.body.name.length < 2) {
        errors.push('Name should be atleast 2 characters long!');
    }

    if (!/^(https?:\/\/)/.test(req.body.imageUrl)) {
        errors.push('ImageUrl should start with http:// or https://!');
    }

    if (req.body.description.length < 5 || req.body.description.length > 500) {
        errors.push('Description should be atleast 5 and not more than 500 characters long!');
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = validationChecker;