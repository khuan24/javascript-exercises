const fibonacci = function(pos) {
    // let pos = Number(num)

    if (pos < 0) {
        return "OOPS"
    } else if (pos == 0) {
        return 0
    }
    
    let fib = []

    for (let i=0; i<pos; i++) {
        if (i == 0 || i == 1) {
            fib.push(1)
        } else {
            fib.push(fib[i-1] + fib[i-2])
        }
    }

    return fib[pos-1]
};

// Do not edit below this line
module.exports = fibonacci;
