const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product * item)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

function factorialRecursive(num) {
  if (num == 0) {
    return 1
  } else if (num < 0) {
    return -1
  } else {
    return num * factorialRecursive(num-1)
  }
}

const factorial = factorialRecursive;

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
