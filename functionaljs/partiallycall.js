var slice = Array.prototype.slice;
function logger(namespace) {
    return function () {
         var args = slice.call(arguments); 
         console.log.apply(null, [namespace].concat(args));
    }
}

module.exports = logger;



//offi
 var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger