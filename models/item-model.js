'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
    name: String,
    itemId: Number,
    storeId: Number,
    price: Number
});

module.exports = mongoose.model('Item', ItemSchema);