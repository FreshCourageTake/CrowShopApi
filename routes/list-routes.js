'use strict';
module.exports = function(app) {
    const lists = require('../controllers/list-controller');

    // shoppingList Routes
    app.route('/list')
        .get(lists.fetchAllLists)
        .post(lists.createList);

    app.route('/list/:listId')
        .delete(lists.deleteList);
};