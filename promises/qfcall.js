var q = require('q'),
    defer = q.defer(),
    jsonToParse = process.argv[2];
    
    q.fcall(JSON.parse, jsonToParse)
    .then(null, console.log);