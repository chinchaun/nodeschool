var _ = require('lodash');

var worker = function (users) {
   return  _.filter(users, { active: true });
};

module.exports = worker;

//Oficial

'use strict';

var _ = require("lodash");

var filterwhere = function (item) {
    return _.filter(item, {active: true});
};

module.exports = filterwhere;