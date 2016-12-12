let numbers = process.argv.slice(2);
findMin(numbers);

function findMin(...numbers) {
    let min = Number.MAX_VALUE;
    let arr = numbers.toString().split(",");
    arr.forEach((num) => {
        if(num <= min) {
            min = num;
        };
    });
    let output = `The minimum of [${numbers}] is ${min}`;
    console.log(output);
};

//Oficial

 var numbers = process.argv.slice(2);
 var min = Math.min(...numbers);

 console.log(`The minimum of [${numbers}] is ${min}`);