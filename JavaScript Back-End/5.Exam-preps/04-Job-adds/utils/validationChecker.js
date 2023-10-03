function validationChecker (req) {
    const errors = [];

    //TODO: Change validation checks for the edit and create functionality

    if (req.body.name.length < 2) {
        errors.push('Name should be atleast 2 characters long!');
    }

    if (req.body.location.length < 2) {
        errors.push('Location should be atleast 2 characters long!');
    }

    if (req.body.companyName.length < 2) {
        errors.push('Company name should be atleast 2 characters long!');
    }


    if (req.body.description.length < 5 || req.body.description.length > 500) {
        errors.push('Description should be atleast 5 and not more than 500 characters long!');
    }

    if (errors.length > 0) {
        throw errors;
    }
}

module.exports = validationChecker;