const sumdigits = require("../katas/day-1/sumDigits.js");

// Tests for sumDigits
describe("sumDigits", () => {
  xtest("returns the input number when passed a single digit number",() => {
    //arrange
    const expected = 0
    const expected2 = 9
    //act
    const actual = sumdigits(0)
    const actual2 = sumdigits(9)
    //assert 
    expect(actual).toBe(expected)
    expect(actual2).toBe(expected2)
  } )
 xtest("returns a single number when passed a double digit number",() => {
  //arrange
  const expected = 6
 
  //act
  const actual = sumdigits(15)
  
  //assert 
  expect(actual).toBe(expected)
  
} )
xtest("return a single number when passed a decimal", () => {
//arrange
const expected = 8
 
//act
const actual = sumdigits(1.25)

//assert 
expect(actual).toBe(expected)

})
 })
/*
  TEST 1 - sumDigits returns the input number when passed a single digit number
  This test has two ASSERTIONS being made
  The same behaviour is being tested but with different inputs - 1 and 9

  E.g. sumDigits(1) should output 1
  E.g. sumDigits(9) should output 9
*/

/*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  
  A multi-digit input means you now have to implement to 'addition' part of this function,
  but you don't have to think about the logic for dealing with/ignoring non-digit characters yet
  (that's for our next test!)
*/

/*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
*/
