// function map(srcArray, funct){
//     return srcArray.map(funct)
// }

// function reduce(srcArray, funct, startingPoint=0){
//     return srcArray.reduce(funct, startingPoint) 
// }

function map(srcArray, funct){
    let newArray = []

    for (let i = 0; i<srcArray.length; i++){
        newArray.push(funct(srcArray[i])
    }
    return newArray
}
