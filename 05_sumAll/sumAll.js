const sumAll = function(startNum, endNum) {
    let sum = 0

    // catch errors: can also use Number.isInteger()
    if (typeof startNum != "number" || typeof endNum != "number") {
        return 'ERROR'
    } else if (startNum < 0 || endNum < 0) {
        return 'ERROR'
    }

    // swap start and end if start is larger than end
    if (startNum > endNum) {
        let temp = startNum
        startNum = endNum
        endNum = temp
    }

    // calculate the sum
    for (let i=startNum; i<=endNum; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
