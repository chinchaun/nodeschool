var q = require('q'),
    defer1 = q.defer(),
    defer2 = q.defer();
   
    setTimeout(function() {
        defer1.resolve('PROMISES');
        defer2.resolve('FTW');
               
    }, 200);
    
     all(defer1.promise, defer2.promise)
        .then(console.log, console.log);
    
function all(prom1, prom2) {
    var internalProm = q.defer();
        counter = 0,
        val1 = '',
        val2 = '';
    var resolve = function () {
        internalProm.resolve([val1, val2]);
    };
    prom1
      .then(function (result) {
          val1 = result;
          counter++;
           if(counter === 2){
                resolve();
            };  
      }, function () {
          internalProm.reject();
      });
    
    prom2
      .then(function (result) {
          val2 = result;
           counter++;
            if(counter === 2){
                resolve();
            };    
    
      }, function () {
          internalProm.reject();
      });
     
    
    return internalProm.promise;
}


 var q = require('q')
      , def1 = q.defer()
      , def2 = q.defer();
    
    function all (prom1, prom2) {
      var groupDef = q.defer()
        , counter = 0
        , val1
        , val2;
    
      prom1
      .then(function (result) {
        val1 = result;
        ++counter;
        if (counter >=2) groupDef.resolve([val1, val2]);
      })
      .then(null, groupDef.reject)
      .done();
    
      prom2
      .then(function (result) {
        val2 = result;
        ++counter;
        if (counter >=2) groupDef.resolve([val1, val2]);
      })
      .then(null, groupDef.reject)
      .done();
    
      return groupDef.promise;
    }
    
    all(def1.promise, def2.promise)
    .then(console.log)
    .done();
    
    setTimeout(function () {
      def1.resolve("PROMISES");
      def2.resolve("FTW");
    }, 200);

