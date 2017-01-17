var _ = require("lodash");

var worker = function(cities) {
    var result = {
        hot: [],
        warm: [],
    };

    function temp(item) {
        return item > 19;
    };

    _.forEach(cities, function (temps, townName) {
        if(_.every(temps, temp) ) {
            result.hot.push(townName);
        }
        else if (_.some(temps, temp)) {
            result.warm.push(townName);
        };
    });
    return result;
};

// export the worker function as a nodejs module
module.exports = worker;

Oficial

'use strict';

var _ = require("lodash");

var tempsort = function (item) {
    var result = {
        hot: [],
        warm: []
    };

    function check_temp (item) {
        return item > 19;
    }

    _.forEach(item, function (town, townname) {

        if (_.every(town, check_temp)) {
            result.hot.push(townname);
        } else if (_.some(town, check_temp)) {
            result.warm.push(townname);
        }

    });

    return result;
};

module.exports = tempsort;