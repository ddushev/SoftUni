function errorParser(err) {
    let errors = [];

    if (err.name == 'ValidationError') {
        for (const [field, error] of Object.entries(err.errors)) {
            errors.push(error.message);
        }
    }else {
        errors = [...err];
    }

    return errors;
}

module.exports = errorParser;