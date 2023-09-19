function errorParser(error) {
    const errors = [];

    if (error.name == 'ValidationError') {
        for (const [field, err] of Object.entries(error.errors)) {
            errors.push(err.message);
        }
    }

    return errors;
}

module.exports = errorParser;