const roundToDecimalPlace = (num, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
};

const convertToCelsius = function(temp) {
  if (typeof temp !== 'number') {
    throw new Error('Input must be a number');
  }
  const celsius = (temp - 32) * (5 / 9);
  return roundToDecimalPlace(celsius, 1);
};

const convertToFahrenheit = function(temp) {
  if (typeof temp !== 'number') {
    throw new Error('Input must be a number');
  }
  const fahrenheit = (temp * (9 / 5)) + 32;
  return roundToDecimalPlace(fahrenheit, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
