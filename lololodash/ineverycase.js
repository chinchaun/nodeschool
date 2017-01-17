var _ = require("lodash");

var worker = function(cities) {
    return _.forEach( cities, function(city, index, cities) {
        if( city.population >= 1.0) {
            city.size = 'big';
        }
        else if ( city.population >= 0.5) {
            city.size = 'med';
        }
        else {
            city.size = 'small';
        };
    }); 
};

module.exports = worker;


  'use strict';
    
    var _ = require("lodash");
    
    module.exports = function(collection) {
      // add a size attribute to the collection based on the item's population
      return _.forEach(collection, function(item) {
        if (item.population > 1) {
          item.size = "big";
        } else if(item.population > 0.5) {
          item.size = "med";
        } else {
          item.size = "small";
        }
      });
    };

