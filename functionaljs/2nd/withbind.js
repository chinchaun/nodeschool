module.exports = function(namespace) {
    return console.log.bind(null, namespace);
}

//Oficial 
 module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    }