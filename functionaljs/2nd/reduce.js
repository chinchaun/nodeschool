function countWords(inputWords) {
    var result = {};
    inputWords.reduce(function (previousValue, currentValue, currentIndex, array) {
        result[currentValue] ? result[currentValue]++ :  result[currentValue] = 1;
    }, {});

    return result;
}

module.exports = countWords;


//Oficial

 function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }