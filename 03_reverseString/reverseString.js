const reverseString = function(myString) {
    let newString = ""

    for (let i=myString.length; i>=0; i--) {
        newString += myString.charAt(i)
    }

    return newString
};

// Do not edit below this line
module.exports = reverseString;
