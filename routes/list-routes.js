'use strict';
module.exports = function(app) {
    var lists = require('../controllers/list-controller');

    // shoppingList Routes
    app.route('/lists')
        .get(lists.fetchAllLists)
        .post(lists.createList);

    app.route('/lists/:listId')
        .delete(lists.deleteList);
};