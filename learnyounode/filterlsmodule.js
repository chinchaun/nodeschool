var fs = require('fs'),
    path = require('path'),
    extnameDotted = "";

function filterDirectory(pathfile, extname, cb){
    fs.readdir(pathfile, function (err, list) {
        if(err){
            return cb(err);
        };
        extnameDotted = '.' + extname;
        var filteredList = list.filter(filterByExtName);
        return cb(null, filteredList);
    }, this);
};    


function filterByExtName(element) {
    if(path.extname(element) == extnameDotted){
        return true;
    }
    else{
        return false;
    };
    
}

module.exports = filterDirectory;


// Oficial

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    } 