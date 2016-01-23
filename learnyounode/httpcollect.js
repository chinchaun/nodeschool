var url = process.argv[2],
    http = require('http'),
    concat = require('concat-stream');

http.get(url.toString(), function (response) {
    var chunk = '';
    response.setEncoding('utf8');
    response.pipe(concat(function (data) {
        chunk = data.toString();
        console.log(chunk.length);
        console.log(chunk);
    }))
})
.on('error', function (err) {
        console.log('getError' + err);
});


 var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

