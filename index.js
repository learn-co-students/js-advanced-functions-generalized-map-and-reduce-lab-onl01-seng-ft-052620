// Add your functions here

function map(array, method) {
    let r = []

    for (let i = 0; i < array.length; i++) {
        r.push(method(array[i]))
    }
    return r
}

function reduce(array, method, start) {
    let total = !!start ? start : array[0]
    let i = !!start ? 0 : 1

    for (; i < array.length; i++) {
        total = method(array[i], total)
    }
    return total
}