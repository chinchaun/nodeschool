var websocket = require('websocket-stream')
var ws = websocket('ws://localhost:8099');
ws.write('hello\n');


// Here's the reference solution:

  var ws = require('websocket-stream');
  var stream = ws('ws://localhost:8099');
  stream.write('hello\n');