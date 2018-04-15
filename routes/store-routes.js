'use strict';
module.exports = function(app) {
    const stores = require('../controllers/store-controller');

    // shoppingList Routes
    app.route('/store')
        .get(stores.fetchAllStores);
};