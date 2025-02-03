// const vegetables = [
//   {name: 'Parsnip', type: 'root', quantity: 4},
//   {name: 'Broccoli', type: 'brassica', quantity: 1},
//   {name: 'Carrot', type: 'root', quantity: 5},
//   {name: 'Onion', type: 'bulb', quantity: 3},
//   {name: 'Chard', type: 'leaf', quantity: 3},
//   {name: 'Runner beans', type: 'legume', quantity: 8}
// ]


function countVeg(vegetables, vegType) {
    let total = 0 
    for(let i=0; i < vegetables.length; i++) {
        const vegObj = vegetables[i]
        if(vegObj.type === vegType) {
            total += vegObj.quantity 
        }
    }
    return total
}


module.exports = countVeg;


// countVeg([{name: 'Runner beans', type: 'legume', quantity: 4}], 'legume')
// // => 4

// const vegetables = [
//   {name: 'Parsnip', type: 'root', quantity: 4},
//   {name: 'Broccoli', type: 'brassica', quantity: 1},
//   {name: 'Carrot', type: 'root', quantity: 5},
//   {name: 'Onion', type: 'bulb', quantity: 3},
//   {name: 'Chard', type: 'leaf', quantity: 3},
//   {name: 'Runner beans', type: 'legume', quantity: 8}
// ]
// countVeg(vegetables, 'root')
// // => 9