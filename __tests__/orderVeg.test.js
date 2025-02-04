const orderVeg = require("../katas/day-2/orderVeg")

describe("orderVeg", () => {
    xtest("returns sorted array when only 1 object input", () => {
        //Assign
        const expected = [
            { name: "Broccoli", type: "brassica", quantity: 1 }
        ]
        
        const vegetables = [
           { name: "Broccoli", type: "brassica", quantity: 1 }
            ]
            
         //Act 
         const actual = orderVeg(vegetables)
         
         //Assertion

         expect(actual).toEqual(expected) 
         
        });

    xtest("returns sorted array when only muliple objects", () => {
            //Assign
            const expected = [
                { name: "Broccoli", type: "brassica", quantity: 1 }, 
                { name: "Onion", type: "bulb", quantity: 3 }, 
                { name: "Chard", type: "leaf", quantity: 3 }, 
                { name: "Runner beans", type: "legume", quantity: 8 }
            ]
            
            const vegetables = [
                { name: "Runner beans", type: "legume", quantity: 8 },
                { name: "Onion", type: "bulb", quantity: 3 },
                { name: "Broccoli", type: "brassica", quantity: 1 },
                { name: "Chard", type: "leaf", quantity: 3 }
            ]
                
             //Act 
             const actual = orderVeg(vegetables)
             
             //Assertion
    
             expect(actual).toEqual(expected)
            });
    xtest("should return a new reference", () => {
        //Assign
        const expected = [
                { name: "Broccoli", type: "brassica", quantity: 1 }, 
                { name: "Onion", type: "bulb", quantity: 3 }, 
                { name: "Chard", type: "leaf", quantity: 3 }, 
                { name: "Runner beans", type: "legume", quantity: 8 }]
            
            const vegetables = [
                { name: "Runner beans", type: "legume", quantity: 8 },
                { name: "Onion", type: "bulb", quantity: 3 },
                { name: "Broccoli", type: "brassica", quantity: 1 },
                { name: "Chard", type: "leaf", quantity: 3 }]
                
        //Act 
             const actual = orderVeg(vegetables)
             
        //Assertion
    
             expect(actual).not.toBe(expected)
    });

    xtest("should not mutate original list", () => {
        //Assign
      
      const vegetables = [
            { name: "Broccoli", type: "brassica", quantity: 1 }, 
            { name: "Onion", type: "bulb", quantity: 3 }, 
            { name: "Chard", type: "leaf", quantity: 3 }, 
            { name: "Runner beans", type: "legume", quantity: 8 }]
                
        //Act 
             const actual = orderVeg(vegetables)
             
        //Assertion
    
             expect(vegetables).toStrictEqual([
                { name: "Broccoli", type: "brassica", quantity: 1 }, 
                { name: "Onion", type: "bulb", quantity: 3 }, 
                { name: "Chard", type: "leaf", quantity: 3 }, 
                { name: "Runner beans", type: "legume", quantity: 8 }]) 
                // original input should not change
    });
})
