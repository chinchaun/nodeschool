var trumpet = require('trumpet'),
    tr = trumpet(),
    through2 = require('through2'),
    through  = through2(write, end);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}

var loudStream = tr.selectAll('.loud').createStream();  
loudStream.pipe(through).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);


// Here's the reference solution:

var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);