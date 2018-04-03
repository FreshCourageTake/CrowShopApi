'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of your list'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['open', 'completed']
        }],
        default: ['open']
    }
});

module.exports = mongoose.model('List', ListSchema);