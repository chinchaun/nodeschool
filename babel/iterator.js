const max = process.argv[2];
    let FizzBuzz = {
        [Symbol.iterator]() {
            let index = 1;
            return {
                next() {
                    let response = '';
                    if( index > max ) {
                        return { done: true };
                    }
                    if( (index % 3) === 0) {
                        if( (index % 5) === 0) {
                            response = 'FizzBuzz';
                        }
                        else {
                            response = 'Fizz';
                        };
                    };

                    if( ( index % 5 ) === 0 && !response) {
                        response = 'Buzz';
                    };

                    if(!response) {
                        response = index;
                    };
                    index += 1;
                    return { done: false, value: response };
                }
            }
        }
    }

for (var n of FizzBuzz) {
    console.log(n);
}

//Oficial

const max = +process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        let num = 1;
        return {
          next() {
            if (num > max) {
              return { done: true };
            }
            let value = num;
            if (value % 15 === 0) {
              value = 'FizzBuzz';
            } else if (value % 3 === 0) {
              value = 'Fizz';
            } else if (value % 5 === 0) {
              value = 'Buzz';
            }
            num++;
            return { done: false, value: value };
          }
        }
      }
    }
    
    for (var n of FizzBuzz) {
      console.log(n);
    }