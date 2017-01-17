let balance = 0;

module.exports = {
    increaseBalance: function (amount) {
        if (!amount) {
            return;
        };
        balance += amount;
    },
    canAfford: function (amount) {
        if (!amount) {
            return false;
        };
        return amount <= balance;
    },
    decreaseBalance: function (amount) {
        if (!amount) {
            return;
        };
        let errorMessage;
        if (!this.canAfford(amount)) {
            errorMessage = 'Insufficient balance';
        }
        if (errorMessage) {
            throw new Error(errorMessage);
        }
        balance -= amount;
    },
    getBalance: function () {
        return balance;
    },
    isValidAmount: function (amount) {
        if (!amount) {
            return false;
        } else {
            return true;
        }
    },

};