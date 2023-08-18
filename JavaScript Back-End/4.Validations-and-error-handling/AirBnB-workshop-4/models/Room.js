const {Schema, model, Types} = require('mongoose');

const URL_REGEX = /^\/static\/.+$/;

const roomSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    city: {type: String, required: true},
    beds: {type: Number, required: true, min: [1, 'Must supplies at least one bed']},
    price: {type: Number, required: true, min: [1, 'Minimum price is at least 1 euro']},
    imgUrl: {
        type: String,
        validate: {
            validator: (value) => URL_REGEX.test(value),
            message: (props) => `${props.value} is not a valid URL`
            }
        }   ,
    facilities: {type: [Types.ObjectId], default: [], ref: 'Facility'},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
});

const Room = model('Room', roomSchema);
module.exports = Room;