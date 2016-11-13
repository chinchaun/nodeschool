var http = require('http'),
    through = require('through2'),
    stream  = through(write, end);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(stream).pipe(res);
    }
    
});
server.listen(process.argv[2]);


//refence solution

var http = require('http');
  var through = require('through2');
  
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
