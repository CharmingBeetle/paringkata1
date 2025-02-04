const getOrderInfo = require("../katas/day-2/getOrderInfo")

describe("getOrderInfo", () => {
    xtest("return an object with only the userId, shippingAddress and orderId", () => { 
     //Assign 
     const customers = {
        userId: 321,
        firstName: "Bob",
        lastName: "Frogs",
        hairstyle: null,
        hasMotorcycle: true,
        shippingAddress: "123 Example Road",
        orderId: 1,
        favouriteColour: "chartreuse",
    }
    const expected = { 
        userId: 321, 
        shippingAddress: "123 Example Road", 
        orderId: 1 
    }

    //Act
    const result = getOrderInfo(customers)
    //Assertion
    expect(result).toEqual(expected)
}) 

        describe("Pure Function Tests", () => {

            xtest("Does not mutate input object", () => {
            //Assign 
            const input = {
                userId: 321,
                firstName: "Bob",
                lastName: "Frogs",
                hairstyle: null,
                hasMotorcycle: true,
                shippingAddress: "123 Example Road",
                orderId: 1,
                favouriteColour: "chartreuse",
            }
            const inputCopy = {
                userId: 321,
                firstName: "Bob",
                lastName: "Frogs",
                hairstyle: null,
                hasMotorcycle: true,
                shippingAddress: "123 Example Road",
                orderId: 1,
                favouriteColour: "chartreuse",
            }
            //Act
            getOrderInfo(inputCopy)
            //Assertion
            expect(input).toEqual(inputCopy)
        })

            xtest("returns a new array", () => {
                //Assign 
                const input = {
                userId: 321,
                firstName: "Bob",
                lastName: "Frogs",
                hairstyle: null,
                hasMotorcycle: true,
                shippingAddress: "123 Example Road",
                orderId: 1,
                favouriteColour: "chartreuse",
                }
      
            //Act
            const expected = getOrderInfo(input)
            //Assertion
            expect(input).not.toBe(expected)
            
        })
    })
})
