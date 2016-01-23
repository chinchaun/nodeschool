var fs = require('fs'),
    path = require('path'),
    pathfile = process.argv[2],
    extname = '.' + process.argv[3];
    
fs.readdir(pathfile, function (err, list) {
    if(err){
        console.log(err);
    };
    var filteredList = list.filter(filterByExtName);
   filteredList.forEach(function(element) {
       console.log(element);
   }, this);
});

function filterByExtName(element) {
    if(path.extname(element) == extname){
        return true;
    }
    else{
        return false;
    };
    
}

//oficial

   var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })