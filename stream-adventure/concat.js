var concat = require('concat-stream');
process.stdin
    .pipe(concat( function (str) {
             console.log(str.toString().split("").reverse().join(""));
        })    
    );


 var concat = require('concat-stream');
  
  process.stdin.pipe(concat(function (src) {
      var s = src.toString().split('').reverse().join('');
      console.log(s);
  }));