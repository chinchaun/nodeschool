var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
    if(val !== '') args.push(+val);
    });
});

// write a function called `avg` here that calculates the average.
function avg(...args) {
    var sum = args.reduce((a, b) => a + b, 0);
    return sum / args.length;
}

console.log(avg(...args));

//Oficial

  var rawArgs = process.argv.slice(2);
    var args = [];
    
    rawArgs.forEach(val => {
      let commaSep = val.split(',');
      commaSep.forEach(val => {
        if(val !== '') args.push(+val);
      });
    });
    
    function avg(...args){
      return args.reduce((a, b)=>a+b)/args.length;
    }
    
    console.log(avg(...args));
