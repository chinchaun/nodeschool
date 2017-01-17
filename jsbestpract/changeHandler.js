// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
const coins = {
    p: 1,
    n: 5,
    d: 10,
    q: 25
};

module.exports = {
    getAmount: function (coinType) {
        if (coins.hasOwnProperty(coinType)) {
            return coins[coinType];
        }
        else {
            throw new Error('Unrecognized coin ' + coinType);
        };
    },
    convertToChange: function (cents) {
        if (!Number.isInteger(cents)) {
            return [];
        };
        let response = [];
        while (cents >= 25) {
            cents -= 25;
            response.push('q');
        }
        while (cents >= 10) {
            cents -= 10;
            response.push('d');
        }
        while (cents >= 5) {
            cents -= 5;
            response.push('n');
        }
        while (cents >= 1) {
            cents -= 1;
            response.push('p');
        }
        return response;
    }
};