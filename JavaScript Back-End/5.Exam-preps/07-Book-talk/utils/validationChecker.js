function validationChecker (req) {
    const errors = [];

    //TODO Change validation checks for the edit and create functionality
    if (!(Number(req.body.stars) > 0 && Number(req.body.stars) < 6)) {
        errors.push('Stars should be positive number!');
    }

    if (req.body.title.length < 2) {
        errors.push('Name should be atleast 2 characters long!');
    }

    if (!/^(https?:\/\/)/.test(req.body.imageUrl)) {
        errors.push('ImageUrl should start with http:// or https://!');
    }

    if (req.body.bookReview.length < 5 || req.body.bookReview.length > 500) {
        errors.push('Description should be atleast 5 and not more than 500 characters long!');
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = validationChecker;