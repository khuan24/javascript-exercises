const convertToCelsius = function(tempF) {
  return roundNum(5*(tempF-32)/9)
};

const convertToFahrenheit = function(tempC) {
  return roundNum(tempC*9/5+32)
};

const roundNum = function(num) {
  return Math.round(num * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
