var _ = require("lodash");
    
var worker = function(freelancers) {
    var sum = _.reduce(freelancers, function(acum, freelancer) {
        acum += freelancer.income;
        return acum;
    }, 0);
    var avg = sum / freelancers.length;
    var result = {
        average: avg,
        underperform: [],   
        overperform: []
    };

    freelancers = _.sortBy(freelancers, 'income');
    result.underperform = _.filter(freelancers, function (num) {
        return num.income <= avg;
    });

    result.overperform = _.filter(freelancers, function (num) {
        return num.income > avg;
    });

    return result;
};


module.exports = worker;

//  'use strict';
    
//     var _ = require("lodash");
    
//     var analyze = function (item) {
    
//         var average,
//             underperform,
//             overperform;
    
//         // Sort
//         item = _.sortBy(item, "income");
    
//         // Sum of all incomes
//         average = _.reduce(item, function(sum, num) {
//             return sum + num.income;
//         }, 0);
    
//         // calculate average
//         average = average / item.length;
    
//         // filter underperformer
//         underperform = _.filter(item, function (num) {
//             return num.income <= average;
//         });
    
//         // filter overperformer
//         overperform = _.filter(item, function (num) {
//             return num.income > average;
//         });
    
//         return {
//             average: average,
//             underperform: underperform,
//             overperform: overperform
//         };
    
//     };
    
//     module.exports = analyze;