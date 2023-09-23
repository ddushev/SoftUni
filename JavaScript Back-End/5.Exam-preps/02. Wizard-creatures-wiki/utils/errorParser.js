function errorParser(err) {
    let errors = [];

    if (err.name == 'ValidationError') {
        for (const [field, error] of Object.entries(err.errors)) {
            errors.push(error.message);
        }
    }else if (Array.isArray(err)) {
        errors = [...err];
    }else {
        errors.push(err.message);
    }

    return errors;
}

module.exports = errorParser;