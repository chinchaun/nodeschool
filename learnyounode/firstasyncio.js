var fs = require('fs'),
    pathfile = process.argv[2];

function readFileCallback(err, data){
  if(err){
    console.log("error");
  }
  else{
    var lines = data.split('\n').length-1;
    console.log(lines);
  }
}

fs.readFile(pathfile, 'utf8', readFileCallback);

//Official

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
