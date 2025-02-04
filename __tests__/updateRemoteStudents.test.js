const updateRemoteStudents = require("../katas/day-2/updateRemoteStudents")

describe("updateRemoteStudents", ()=> {
    
    xtest("returns a new array when one record has no location updated", () => {;
     
    //Arrange
    const input = [
        { name: "Hypatia", age: 31, location: "leeds" },
        { name: "Ramanujan", age: 22 },
        { name: "Tao", age: 47, location: "manchester" }
      ]
    const expected = [
        { name: "Hypatia", age: 31, location: "leeds" }, 
        { name: "Ramanujan", age: 22, location: "remote" }, 
        { name: "Tao", age: 47, location: "manchester" }]
    
    
    //Act
    const actual = updateRemoteStudents(input)

    //Assertion
    expect(actual).toEqual(expected)

    });
    
    xtest("returns a new array when two or more records have no location updated",() => {; 
    //Arrange
    const input = [
        { name: "Hypatia", age: 31, location: "leeds" },
        { name: "Ramanujan", age: 22 },
        { name: "Tao", age: 47}
      ]
    const expected = [
        { name: "Hypatia", age: 31, location: "leeds" }, 
        { name: "Ramanujan", age: 22, location: "remote" }, 
        { name: "Tao", age: 47, location: "remote" }]

      //Act
      const actual = updateRemoteStudents(input)

      //Assertion
      expect(actual).toEqual(expected)
    }); 

    describe("Pure Function Tests", () => {
        
        xtest("does not mutate original input", ()=> {
            //Assign
            const input = [
                { name: "Hypatia", age: 31, location: "leeds" }]
            const inputCopy = [
                { name: "Hypatia", age: 31, location: "leeds" }]
              

            //Act
                updateRemoteStudents(input)

            //Assertion
            expect(input).toEqual(inputCopy)
        })
    
        xtest("return a new array", ()=> {
            //Assign
            const input = [{ name: "Hypatia", age: 31, location: "leeds" }, { name: "Ramanujan", age: 22, location: "remote" }, { name: "Tao", age: 47, location: "manchester" }]

            //Act
            const expected = updateRemoteStudents(input)

            //Assertion
            expect(input).not.toBe(expected)
        })
    })

})