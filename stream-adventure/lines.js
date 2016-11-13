var split = require('split'),
    through = require('through2'),
    stream = through(write, end);

var arr = [];
function write(buffer, encoding, next) {
    var strBuff = buffer.toString();
    var result = '';
    if(arr.length % 2 === 0) {
        result = strBuff.toLowerCase();
    }
    else {
        result = strBuff.toUpperCase();
    };
    arr.push(strBuff);
    this.push(result);
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(stream).pipe(process.stdout);


// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;