var pathfile = process.argv[2],
    extname = process.argv[3],
    filterModule = require('./filterlsmodule.js'),
    path = require('path');

filterModule(pathfile, extname, function(err, data){
    if(err){
        console.log(err);
    };
    data.forEach(function(element) {
        console.log(element);
    }, this);
});

//oficial 

 var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })