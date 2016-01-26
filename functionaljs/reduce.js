function countWords(inputWords) {
      return inputWords.reduce(function (result, word) {
          result[word] = ++result[word] || 1;
          return result;
      }, {});
}
    
module.exports = countWords;


function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
        return countMap;
      }, {}); // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords;