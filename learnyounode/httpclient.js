var url = process.argv[2],
    http = require('http');

http.get(url.toString(), function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
       console.log(data); 
    });
    response.on('error', function(err){
        console.log('response error' + err);
    });
})
.on('error', function (err) {
        console.log('getError' + err);
});


  var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })