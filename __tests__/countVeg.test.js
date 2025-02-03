const countVeg = require("../katas/day-1/countVeg")

//Behaviours
//1. check to see if type is an exisiting property
//2. check  the value of the quantity
//3. adding the values for each type
//4. return sum 



//Tests
describe("countVeg", () => {
    test("return number when single type present in an object", () => {
        //Arrange
        const expectedQuantity = 3
        const vegetables = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        //Act
        const actual = countVeg(vegetables, 'leaf')
        //Assert
        expect(actual).toBe(expectedQuantity)



    })
    test("return sum when two or more types present in an object", () => {
        //Arrange
        const expectedQuantity = 9
        const vegetables = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        //Act
        const actual = countVeg(vegetables, 'root')
        //Assert
        expect(actual).toBe(expectedQuantity)

    })
    test("return 0 when type not present", () => {
        //Arrange
        const expectedQuantity = 0
        const vegetables = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        //Act
        const actual = countVeg(vegetables, 'nill')
        //Assert
        expect(actual).toBe(expectedQuantity)
})
})