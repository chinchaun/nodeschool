var q = require('q'),
    qhttp = require("q-io/http");
    defer = q.defer();
    
 
qhttp.read('http://localhost:7000/')
    .then(function (userId) {
        getUserFromDB(userId);
    })
    .then(null, console.log)
    .done();


function getUserFromDB(userId) {
    qhttp.read('http://localhost:7001/' + userId)
        .then(function (response) {
            console.log(JSON.parse(response));
        })
        .then(null, console.log)
        .done();
}   


 var qhttp = require('q-io/http');
    
    qhttp.read("http://localhost:7000/")
    .then(function (id) {
      return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function (json) {
      console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();  
    