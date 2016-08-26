function doubleAll(numbers) {
    var result = numbers.map(function (number) {
        return number * 2;
    });
    return result;
}

module.exports = doubleAll;

//Official 
module.exports = function doubleAll(numbers) {
    return numbers.map(function double(num) {
        return num * 2
    })
}