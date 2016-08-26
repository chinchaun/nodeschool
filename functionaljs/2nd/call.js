function duckCount() {
    var arr = Array.prototype.slice.call(arguments);
    var duckObjects = arr.filter(function (element) {
        if (Object.prototype.hasOwnProperty.call(element, 'quack')) {
            return element;
        }
    });
    return duckObjects.length;
}

module.exports = duckCount;


//Oficial

function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount

