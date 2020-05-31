const mongoose = require('mongoose');
const thing = mongoose.model('thing');

exports.list_all_things = (req, res) => {
    thing.find({}, (err, thing) => {
        if (err) res.send(err);
        res.json(thing);
    });
};

exports.create_a_thing = (req, res) => {
    const newTask = new thing(req.body);
    newTask.save((err, thing) => {
        if (err) res.send(err);
        res.json(thing);
    });
};

exports.read_a_thing = (req, res) => {
    thing.findById(req.params.thingId, (err, thing) => {
        if (err) res.send(err);
        res.json(thing);
    });
};

exports.update_a_thing = (req, res) => {
    thing.findOneAndUpdate(
        {_id: req.params.thingId},
        req.body,
        {new: true},
        (err, thing) => {
            if (err) res.send(err);
            res.json(thing);
        }
    );
};

exports.delete_a_thing = (req, res) => {
    thing.deleteOne({_id: req.params.thingId}, err => {
        if (err) res.send(err);
        res.json({
            message: 'thing successfully deleted',
            _id: req.params.thingId
        });
    });
};
