const removeFromArray = function(myArray, ...args) {
    // Naive approach without utilizing pre-existing array methods
    // let newArray = []

    // if (arguments.length < 2) {
    //     return "ERROR"
    // }

    // for (let i=0; i<myArray.length; i++) {
    //     let isMatch = false

    //     for (let j=1; j<arguments.length; j++) {
    //         if (myArray[i] === arguments[j]) {
    //             isMatch = true
    //         }
    //     }
        
    //     if (!isMatch) {
    //         newArray.push(myArray[i])
    //     }
        
    // }
    // return newArray

    // Use includes() and filter()
    // Filter myArray on a function: the element cannot be included in the list of elements to remove
    return myArray.filter((element) => !args.includes(element))

};

// Do not edit below this line
module.exports = removeFromArray;
