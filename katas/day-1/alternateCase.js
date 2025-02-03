function alternateCase(string) {

    let newStr  = ""
    for(let i = 0; i < string.length; i++) {
    const letter = string[i]
    if(i % 2 === 0 || i === 0 && i === " ") {
        newStr+=letter.toUpperCase()
    //  if(i=== " " && i % 2 !== 0) {
    //     i = i + 1
    //     newStr+=letter.toUpperCase()
    //  }
     
    } else {
        newStr+= letter
    }
}
console.log(newStr)    
return newStr
}
module.exports = alternateCase;
