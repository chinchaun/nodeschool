var _ = require('lodash');

var worker = function (sales) {
    return _.sortBy(sales, function(sale) {
        return sale.quantity * -1;
    });
};

module.exports = worker;

//Oficial

'use strict';

var _ = require("lodash");

var sorting = function (collection) {
    return _.sortBy(collection, function (item) {
        return -item.quantity;
    });

    /* Also possible:
        return _.sortBy(collection,"quantity").reverse();
        */
};

module.exports = sorting;

