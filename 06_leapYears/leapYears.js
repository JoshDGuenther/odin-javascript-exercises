const leapYears = function(year) {

    // Your solution here
    // A year is a leap year if:
    // 1. It is divisible by 4;
    // 2. If it is divisible by 100, it must also be divisible by 400.
    
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;


};

// Do not edit below this line
module.exports = leapYears;
