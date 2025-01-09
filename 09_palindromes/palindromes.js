const palindromes = function (str) {
    // convert to lowercase , remove spaces and punctuation
    // let processedStr = str.toLowerCase().replaceAll(" ", "").replace(/[.,?!"':;-]/g, "")

    // or just replace every character that is not a lowercase letter
    const processedStr = str.toLowerCase().replace(/[^a-z]/g, "")
    // reverse and check if equal
    return processedStr.split("").reverse().join("") === processedStr
};

// Do not edit below this line
module.exports = palindromes;
