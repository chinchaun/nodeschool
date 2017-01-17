var _ = require("lodash");

var worker = function(user) {
    return _.template('Hello <%= name %> (logins: <%= value %>)')({ name: user.name, value: user.login.length });
};

module.exports = worker;


 'use strict';
    
    var _ = require("lodash");
    
    var template = function (inputvar) {
    
        var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";
    
        return _.template(mytemplate)(inputvar);
    };
    
    module.exports = template;