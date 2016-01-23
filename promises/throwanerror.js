var q = require('q'),
    ivalidJSON = process.argv[2];
    
    parsePromised(ivalidJSON)
        .then(console.log)
        .then(null,console.log);
    
function parsePromised(data) {
    var def = q.defer();
    try {
        var jsonParsed = JSON.parse(data);
        def.resolve(jsonParsed);
    } 
    catch (error) {
        def.reject(error);
    }
    
    return def.promise;
} 


var q = require('q');
    
    function parsePromised (json) {
      var def = q.defer()
        , result;
    
      try {
        result = JSON.parse(json);
      } catch (e) {
        def.reject(e);
      }
    
      def.resolve(result);
      return def.promise;
    };
    
    parsePromised(process.argv[2])
    .then(null, console.log)