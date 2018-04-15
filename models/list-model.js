'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ListSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of your list'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    completed: Date,
    store: { type: Schema.Types.ObjectId, ref: 'Store' },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('List', ListSchema);