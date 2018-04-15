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

exports.fetchStoreInfo = function(req, res) {
    Store.findOne({ _id: req.params.storeId}, function(err, stores) {
        if (err)
            res.send(err);
        res.json(stores);
    });
};


