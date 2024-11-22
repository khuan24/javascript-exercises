const repeatString = function(myString, numTimes) {
    if (numTimes < 0) {
        return "ERROR"
    }
    
    let newString = ""
    for (let i=1; i<=numTimes; i++) {
        newString += myString
    }

    return newString
};

// Do not edit below this line
module.exports = repeatString;
