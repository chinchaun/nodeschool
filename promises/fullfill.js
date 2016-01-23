var q = require('q');

   callPromise()
    .then(function (data) {
        console.log(data);
    });
   
   
function callPromise() {
   var defer = q.defer();
   setTimeout(function(data) {
     defer.resolve('RESOLVED!');
}, 300);
    return defer.promise;
}   

 var q = require('q');
    var def = q.defer();
    
    def.promise.then(console.log);
    setTimeout(def.resolve, 300, "RESOLVED!");




    