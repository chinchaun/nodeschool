var q = require('q')
      , defer = q.defer();
    
    defer.promise
    .then(function (data) {
        return attachTitle(data);    
    })
    .then(function (data) {
        console.log(data);
    });
    
    defer.resolve('MANHATTAN');
    
function attachTitle(data) {
    return 'DR. ' + data;
}    


var q = require('q')
      , def = q.defer();
    
    function attachTitle (name) {
      return "DR. " + name;
    }
    
    def.promise
    .then(attachTitle)
    .then(console.log);
    
    def.resolve("MANHATTAN");