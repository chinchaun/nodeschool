var _ = require("lodash");

var worker = function(users) {
    return _.chain(users)
        .groupBy('username')
        .map(function (user, username) {
            var comment_count = _.size(user);
            return { username, comment_count};
        })
        .sortBy(function (user) {
            return user.comment_count * -1;
        })
        .value();
};

module.exports = worker;

//Oficial

    'use strict';
    
    var _ = require("lodash");
    
    var commentcount = function (comments) {
    
        var counted = [];
    
        // Group by username
        comments = _.groupBy(comments, "username");
    
        _.forEach(comments, function (item, name) {
    
            counted.push({
                username: name,
                comment_count: _.size(item)
            });
        });
    
        return _.sortBy(counted, "comment_count").reverse();
        // alternative with a sorted function
        // return _.sortBy(counted, function(comment) { return -comment.comment_count; });
    };
    
    /*
    Alternative solution with use of 'chain':
    
    var commentcount = function(comments) {
    
        return _.chain(comments)
        .groupBy("username")
        .map(function(item, name) {
            return {username: name, comment_count: _.size(item)};
        })
        .sortBy(function(counted) {
            return -counted["comment_count"];
        });
    };
    */
    
    module.exports = commentcount;

