const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS"
    } else if (position == 0) {
        return 0
    }
    
    let fib = []

    for (let i=0; i<position; i++) {
        if (i == 0 || i == 1) {
            fib.push(1)
        } else {
            fib.push(fib[i-1] + fib[i-2])
        }
    }

    return fib[position-1]
};

// Do not edit below this line
module.exports = fibonacci;
