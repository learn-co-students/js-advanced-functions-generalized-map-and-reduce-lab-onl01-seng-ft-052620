// Add your functions here




// function map(array, fn) {
//     let output = []
//     for (let element in array) {
//         output[element] = fn(array[element])
//     }
//     return output;
// }

function map(arra, fn) {
    let output = []
    for (let i = 0; i < arra.length; i++) {
        output.push(fn(arra[i]))
    }
    return output
}



function reduce(array, func, start) {

    let total = !!start ? start : array[0]

    let i = !!start ? 0 : 1

    for (; i < array.length; i++) {
      total = func(array[i], total)
    }
  
    return total;
}