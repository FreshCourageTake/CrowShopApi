'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StoreSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Store', StoreSchema);