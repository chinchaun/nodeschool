function duckCount() {
    var args =  Array.prototype.slice.call(arguments);
    var total =  args.reduce(function (result, obj) {
        if(Object.getPrototypeOf(obj) === Object.prototype){
            if(obj.hasOwnProperty('quack')){
                result += 1;
            }
        }
        else{
            if('quack' in obj){
                result += 1;
            }   
        }
        return result;
    }, 0);
        
    return total;
    
}

module.exports = duckCount;


//Oficial 

  function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount;