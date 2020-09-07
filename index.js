
function map(sourceArray, sourceFunction) {
    const newArray = []
    sourceArray.forEach(element => {
        let newValue = sourceFunction(element)
        newArray.push(newValue)
    })
    return newArray
}

function reduce(sourceArray, sourceFunction, startingValue) {
    let newTotal
    if (startingValue) {
        newTotal = startingValue
    }
    else 
    { newTotal = 0}
    sourceArray.forEach(element => {
        newTotal = sourceFunction(element)
    })
    return newTotal
}