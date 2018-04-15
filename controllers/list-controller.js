'use strict';

const mongoose = require('mongoose'),
    List = mongoose.model('List');

exports.fetchAllLists = function(req, res) {
    List.find({}, function(err, lists) {
        if (err)
            res.send(err);
        res.json(lists);
    });
};

exports.createList = function(req, res) {
    List.find({ name: req.body.name })
        .then((data) => {
            if (data && data.length > 0) {
                res.status(403).send('A list with that name already exists!');
                return;
            }

            console.log(req.body);
            let newList = new List(req.body);
            newList.save(function(err, list) {
                if (err)
                    res.send(err);
                res.json(list);
            });
        })
        .catch((err) => {
            res.status(500).send("Whoops! Something went wrong.");
        });
};

exports.deleteList = function(req, res) {
    List.remove({
        _id: req.params.listId
    }, function(err, list) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};


