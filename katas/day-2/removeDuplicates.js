function removeDuplicates(array) {
    let repeats = {}
    let uniqueArray = []
    for( let i = 0; i < array.length; i++) {
        const element = array[i]
        if(!repeats[element]) {
            uniqueArray.push(array[i])
            repeats[element]= true
        } 
    }
    console.log(repeats)
    console.log(uniqueArray)
    return uniqueArray
    }




module.exports = removeDuplicates;
