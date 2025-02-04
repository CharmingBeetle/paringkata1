const removeDuplicates = require("../katas/day-2/removeDuplicates")

describe("removeDupicates", ()=> {
    xtest("returns an array with a single number is only a single number passed", ()=> {
        //Assign
        const array = [1]
        const expected = [1]
        //Act
        const actual = removeDuplicates(array)
        //Assertion
        expect(actual).toEqual(expected)
    })

    xtest("returns an new array with unique values number when multiple values passed in", ()=> {
        //Assign
        const array = [1, 2, 3, 3, 3, 4, 5, 1]
        const expected = [1, 2, 3, 4, 5]
        //Act
        const actual = removeDuplicates(array)
        //Assertion
        expect(actual).toEqual(expected)
    })

    xtest("does not mutate the input array", ()=> {
        //Assign
        const input = [1, 2, 3, 3, 3, 4, 5, 1]
        
        //Act
        removeDuplicates(input)
        //Assertion
        expect(input).toEqual([1, 2, 3, 3, 3, 4, 5, 1])
    })

    xtest("returns a new array", ()=> {
        //Assign
        const input = [1, 2, 3, 3, 3, 4, 5, 1]
        
        //Act
        const actual = removeDuplicates(input)

        //Assertion
        expect(input).not.toEqual(actual)
    })
    
})