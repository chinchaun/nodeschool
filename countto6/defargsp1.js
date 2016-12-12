function midpoint(lower = 0, upper = 1) {
    if(!isNaN(lower) && !isNaN(upper)) {
        return (lower + upper) / 2;
    }
    else {
        return 0.5;
    };
};

module.exports = midpoint;


//Oficial


 module.exports = (x = 0, y = 1) => (x + y) / 2;
