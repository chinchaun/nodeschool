var q = require('q'),
    http = require("q-io/http");
    defer = q.defer();
    
 
http.read('http://localhost:1337')
    .then(function (response) {
        console.log(JSON.parse(response));
    })
    .then(null, console.log)
    .done(); 
    

    var qhttp = require('q-io/http');
    
    qhttp.read("http://localhost:1337")
    .then(function (json) {
      console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()       