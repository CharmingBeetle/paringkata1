const alternateCase = require("../katas/day-1/alternateCase")

// Behaviour
//1. converts first letter to uppecase 
//2. subsequently changes upper to lower and vice versa
//3. needs to alternate btwn letters
//4. returns converted string

//Tests 

describe("alternateCase", () => {
    test("returns uppercase when only one letter", () => {
        //Assign
        const expected = "G"
        //Act
        const actual = alternateCase("g")
        //Assert
        expect(actual).toBe(expected)
    })

    test("returns snakecase when only one word", () => {
        //Assign
        const expected = "HeLlO"
        //Act
        const actual = alternateCase("hello")
        //Assert
        expect(actual).toBe(expected)
    })
    test("returns snakecase when 2 or more words", () => {
        //Assign
        const expected1 = "HeLlO WoRlD"
        const expected2 = "HeLlO My nAmE Is sArA"
        //Act
        const actual1 = alternateCase("hello world")
        const actual2 = alternateCase("hello my name is sara")
        //Assert
        expect(actual1).toBe(expected1)
        expect(actual2).toBe(expected2)
    })
})