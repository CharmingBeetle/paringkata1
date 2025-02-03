function sumDigits(numbers) {
    // Convert number to a string, then split it into an array of digits
    let numStr = numbers.toString()
    numStr = numStr.replace(".", "")
    let digitsArray = numStr.split("").map(Number)
    // Sum up the digits
    let sum = digitsArray.reduce((acc, digit) => acc + digit, 0);

    return sum;
}

module.exports = sumDigits;
