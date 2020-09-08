// function map(srcArray, funct){
//     return srcArray.map(funct)
// }

// function reduce(srcArray, funct, startingPoint=0){
//     return srcArray.reduce(funct, startingPoint) 
// }

function map(srcArray, funct){
    let newArray = []

    for (let i = 0; i < srcArray.length; i++){
        newArray.push(funct(srcArray[i]))
    }
    return newArray
}

function reduce(srcArray, funct, startingPoint=0){
    let tote = !!startingPoint ? startingPoint : srcArray[0]
    let i = !!startingPoint ? 0 : 1

    for (; i < srcArray.length; i++) {
        tote = funct(srcArray[i], tote)
    }
    return tote;
}
