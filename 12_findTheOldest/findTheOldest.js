const findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        let aLastYear = a.yearOfDeath
        let bLastYear = b.yearOfDeath
        
        if (!a.yearOfDeath) {
            aLastYear = (new Date()).getFullYear()
        } 

        if (!b.yearOfDeath) {
            bLastYear = (new Date()).getFullYear()
        } 

        return (bLastYear - b.yearOfBirth) - (aLastYear - a.yearOfBirth)
    })[0]

};

// Do not edit below this line
module.exports = findTheOldest;
