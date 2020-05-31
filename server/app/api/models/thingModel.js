const mongoose = require('mongoose');

const {Schema} = mongoose;

const thingSchema = new Schema(
    {
        name: {
            type: String,
            required: 'name cannot be blank'
        },
        type: {
            type: String,
            required: 'type cannot be blank'
        }
    },
    {collection: 'thing'}
);

module.exports = mongoose.model('thing', thingSchema);
