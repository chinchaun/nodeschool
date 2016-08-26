module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (acum, currentValue, currentIndex, array) {
        acum.push(fn.call(null, currentValue));
        return acum;
    }, []);
}


//Oficial 
module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function (acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
    }, [])
}
