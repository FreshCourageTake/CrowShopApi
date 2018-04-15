'use strict';

const mongoose = require('mongoose'),
    Store = mongoose.model('Store');

exports.fetchAllStores = function(req, res) {
    Store.find({}, function(err, stores) {
        if (err)
            res.send(err);
        res.json(stores);
    });
};


