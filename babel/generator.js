const max = process.argv[2];
let FizzBuzz = function* () {
    let value = 1;
    while( value <= max ) {
        let response = '';
        if (value % 15 === 0) {
            response = 'FizzBuzz';
        } else if (value % 3 === 0) {
            response = 'Fizz';
        } else if (value % 5 === 0) {
            response = 'Buzz';
        }
        response ? yield response : yield value;
        value++;
    };
}();

for (var n of FizzBuzz) {
    console.log(n);
}

//Oficial

    const max = process.argv[2];
    let FizzBuzz = function* (){
      let num = 1;
      while (num <= max) {
        let value = num;
        num++;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        yield value;
      }
    }();
    
    for (var n of FizzBuzz) {
      console.log(n);
    }
