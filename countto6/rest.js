function avg(...numbers) {
    var sum = numbers.reduce((a, b) => {
        return a + b;
    });
    return sum / numbers.length;
};

module.exports = avg;

//Official

  module.exports = (...args) => {
      var sum = args.reduce((soFar, value) => soFar + value, 0);
      return sum / args.length;
  };