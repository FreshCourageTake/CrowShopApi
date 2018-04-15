'use strict';

const mongoose = require('mongoose'),
    Item = mongoose.model('Item');

exports.fetchItems = function(req, res) {
    Item.find({}, function(err, items) {
        if (err)
            res.send(err);
        res.json(items);
    });
};