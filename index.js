// Add your functions here

function map(userArray, userFunction){
    let mappedArray = []
    for(const element of userArray){
         mappedArray.push(userFunction(element));
    }
    return mappedArray;
}

function reduce(userArray, userFunction){
    let total = 0
    for(const element of userArray){
        total += userFunction(element)
    }
    return total
}