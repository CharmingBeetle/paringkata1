const organiseWardrobe = require("../katas/day-2/organiseWardrobe.js") 

describe("organiseWardrobe", () => {

    test("returns empty array when no matches", () => {
        // Assign
        const clothes = [
            { item: "ugly uggs", purchase_year: 2017, coolness_rating: 1 },
            { item: "fluorescent yellow skinny jeans", purchase_year: 2005, coolness_rating: 10},
            { item: "slouchy beanie", purchase_year: 2017, coolness_rating: -1 },
            { item: "pristine sequined ballet flats", purchase_year: 2013, coolness_rating: 8},
            { item: "floral print doc martens", purchase_year: 2014, coolness_rating: 6}
        ]
        const expected = []
        // Act
        const actual = organiseWardrobe(clothes)
        // Assert
        expect(actual).toEqual(expected)
    })
    
    test("returns one clothing item when only one entry", () => {
        // Assign
        const clothes = [
            { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
        ]
        const expected = [
            { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1, action: "sell" }
        ]
        // Act
        const actual = organiseWardrobe(clothes)
        // Assert
        expect(actual).toEqual(expected)
    })

    test("returns one clothing item when one item fits criteria ", () => {
        // Assign
        const clothes = [
            { item: "ugly uggs", purchase_year: 2017, coolness_rating: 1 },
            { item: "fluorescent yellow skinny jeans", purchase_year: 2005, coolness_rating: 3},
            { item: "slouchy beanie", purchase_year: 2017, coolness_rating: -1 },
            { item: "pristine sequined ballet flats", purchase_year: 2013, coolness_rating: 8},
            { item: "floral print doc martens", purchase_year: 2014, coolness_rating: 6}
        ]
        const expected = [
            { item: "fluorescent yellow skinny jeans", purchase_year: 2005, coolness_rating: 3, action: "sell" }
        ]
        // Act
        const actual = organiseWardrobe(clothes)
        // Assert
        expect(actual).toEqual(expected)
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
