 function Spy(target, method) {
      var  orgFn = target[method];
      var result = {
          count: 0
      };
      
      target[method] = function() {
          result.count++;
          return orgFn.apply(this, arguments);
      };

      return result;

}

module.exports = Spy;

//Oficial 
function Spy(target, method) {
  var originalFunction = target[method]

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0
  }

  // replace method with spy method
  target[method] = function() {
    result.count++ // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }

  return result
}

module.exports = Spy