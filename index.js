// Add your functions here
function map(ary, func) {
    const newArray = []
    ary.forEach(element => {
        let newValue = func(element)
        newArray.push(newValue)
    })
    return newArray
}

function reduce(ary, func, val) {
    let newTotal
    if (val) {
        newTotal = val
    }
    else 
    { newTotal = 0}
    ary.forEach(element => {
        newTotal = func(element)
    })
    return newTotal
} 