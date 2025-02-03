function sumDigits(numbers) {
    // Convert number to a string, then split it into an array of digits
    let digitsArray = numbers.toString().split("").map(Number);

    // Sum up the digits
    let sum = digitsArray.reduce((acc, digit) => acc + digit, 0);

    return sum;
}

module.exports = sumDigits;
