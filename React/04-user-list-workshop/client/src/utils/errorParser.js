export default function errorParser(formValues) {
    let errors = {};
    if (formValues.firstName.length < 3) {
        errors.firstName = 'First name should be at least 3 characters long!';
    }
    if (formValues.lastName.length < 3) {
        errors.lastName = 'Last name should be at least 3 characters long!';
    }

    if (!/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/.test(formValues.email)) {
        errors.email = 'Email is not valid!';
    }

    if (!/^0[1-9]{1}[0-9]{8}$/.test(formValues.phoneNumber)) {
        errors.phoneNumber = 'Phone number is not valid!';
    }

    if (!/^https?:\/\/.+/.test(formValues.imageUrl)) {
        errors.imageUrl = 'ImageUrl is not valid!';
    }

    if (formValues.country.length < 2) {
        errors.country = 'Country should be at least 2 characters long!';
    }

    if (formValues.city.length < 2) {
        errors.city = 'City should be at least 3 characters long!';
    }

    if (formValues.street.length < 2) {
        errors.street = 'Street should be at least 3 characters long!';
    }

    if (!Number(formValues.streetNumber) > 0) {
        errors.streetNumber = 'Street number should be a positive number!!';
    }

    return errors;
}
