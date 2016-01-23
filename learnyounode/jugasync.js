var urls = [process.argv[2], process.argv[3], process.argv[4]],
    http = require('http'),
    concat = require('concat-stream');

var urlResponses = [];

urls.forEach(function(url) {
    http.get(url.toString(), function (response) {
    var urlResponse = {
        url: url,
        data: ''
    };
    response.setEncoding('utf8');
    response.pipe(concat(function (data) {
        urlResponse.data = data.toString();
        urlResponses.push(urlResponse);
        if(urlResponses.length === 3){
            showResult();
        };
    }));
})
.on('error', function (err) {
        console.log('getError' + err);
});
}, this);


function showResult() {
   
        urls.forEach(function(url) {
            urlResponses.forEach(function(response){
                if(url === response.url){
                    console.log(response.data);
                    return;
                };
            });
        }, this);
    };

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

