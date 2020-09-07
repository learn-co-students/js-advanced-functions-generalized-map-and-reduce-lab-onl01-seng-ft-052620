// Add your functions here

function map(array, method) {
    let r = []

    for (let i = 0; i < array.length; i++) {
        r.push(method(array[i]))
    }
    return r
}