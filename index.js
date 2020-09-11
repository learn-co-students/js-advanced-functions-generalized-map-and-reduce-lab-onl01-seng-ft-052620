function map(array, fn) {
    return array.map(e => fn(e))
}

function reduce(array, fn, startingPoint) {
    return startingPoint ? array.reduce(fn, startingPoint) : array.reduce(fn)
}