// Add your functions here

function map(userArray, userFunction){
    let mappedArray = []
    for(const element of userArray){
         mappedArray.push(userFunction(element));
    }
    return mappedArray;
}

function reduce(userArray, userFunction, startingPoint){
    let total;
    let i;
    
    if (startingPoint){
        total = startingPoint
        i = 0
    }else {
        total = userArray[0]
        i = 1
    }
    for (i; i<userArray.length; i++) {
        total = userFunction(userArray[i], total);
    }
    return total
}