var q = require('q');
    var defer = q.defer();
    
    defer.promise.then(undefined, function(error){
        console.log(error);
    });
    
    defer.promise.then(console.log);
    setTimeout(defer.reject, 300, "REJECTED!");
    
    
    var q = require('q');
    var def = q.defer();
    
    function printError (err) {
      console.log(err.message); 
    }
    
    def.promise.then(null, printError);
    setTimeout(def.reject, 300, new Error("REJECTED!"));