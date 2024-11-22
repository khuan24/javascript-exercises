const leapYears = function(year) {
    
    if (year % 100 == 0 && year % 400 != 0) { // a year is not a leap year if it is divisible by 100, but not 400
        return false
    } else if (year % 4 == 0) { // leaps years are divisible by 4
        return true
    } else {
        return false
    }
    
};

// Do not edit below this line
module.exports = leapYears;
