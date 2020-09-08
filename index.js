function map(array, fn) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i]))
    }

    return result;
}

function reduce(array, fn, start) {
    let result = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1



    for (; i < array.length; i++) {
        result = fn(array[i], result)
    }

    return result
}