var q = require('q'),
    defer = q.defer();
    
   q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);
    
    
function alwaysThrows() {
    throw(new Error('OH NOES'));
}

function iterate(params) {
    console.log(params);
    return params + 1;
}


var q = require('q');
    
    function iterate (num) {
      console.log(num);
      return ++num;
    };
    
    function alwaysThrows () {
      throw new Error("OH NOES");
    };
    
    q.fcall(iterate, 1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);    