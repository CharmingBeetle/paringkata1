function orderVeg(vegetables) {
    const veggies = vegetables
    for(let i =0; i < veggies.length; i++){
        veggies.sort((a,b) => a.quantity - b.quantity)
        return veggies
    }

//   for(let i =0; i < vegetables.length; i++) {
//     vegetables.sort((a,b) => a.quantity - b.quantity)
   
//     return vegetables
   
  }  



module.exports = orderVeg;
