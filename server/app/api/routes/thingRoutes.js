const thingBuilder = require('../controllers/thingController');

module.exports = app => {
    app
        .route('/things')
        .get(thingBuilder.list_all_things)
        .post(thingBuilder.create_a_thing);

    app
        .route('/things/:thingId')
        .get(thingBuilder.read_a_thing)
        .put(thingBuilder.update_a_thing)
        .delete(thingBuilder.delete_a_thing);
};
