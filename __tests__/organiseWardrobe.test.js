const organiseWardrobe = require("../katas/day-2/organiseWardrobe.js") 

describe("organiseWardrobe", () => {
    test("returns one clothing item ", () => {
        // Assign

        // Act
        // Assert
    })


        describe("Pure Function Tests", () => {
            xtest("does not mutate input", () => {
                //Assign
                const input = [
                    { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
                    { item: "fluorescent yellow skinny jeans", purchase_year: 2005, coolness_rating: 3}
                    ]
                const inputCopy = [
                    { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
                    { item: "fluorescent yellow skinny jeans", purchase_year: 2005, coolness_rating: 3}
                    ]
                //Act 
                organiseWardrobe(input)
                //Assertion
                expect(input).toEqual(inputCopy)

            })
            xtest("returns a different object than the input object", ()=> {
                //Assign
                const input = [
                    { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
                    { item: "fluorescent yellow skinny jeans", purchase_year: 2005, coolness_rating: 3}
                    ]
            
                //Act
                const expected = organiseWardrobe(input)
                //Assertion
                expect(input).not.toBe(expected)
            })
        })
    })
