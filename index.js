function map(array, fn) {
    let newArray = []

    for (const element of array) {
        newArray.push(fn(element))
    }
    return newArray
}

function reduce(array, fn, startingPoint) {
    let memo
    startingPoint ? memo = startingPoint : memo = array.shift()
    for (const element of array) {
        memo = fn(element, memo)
    }   
    return memo
}


// function map(array, fn) {
//     return array.map(e => fn(e))
// }

// function reduce(array, fn, startingPoint) {
//     return startingPoint ? array.reduce(fn, startingPoint) : array.reduce(fn)
// }