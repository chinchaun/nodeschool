var dataInput = process.argv[2],
    fs = require('fs');
    fs.createReadStream(dataInput).pipe(process.stdout);
