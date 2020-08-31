// Add your functions here

function map(array, method){
    let modded = []

    for (let i = 0; i<array.length; i++){
        modded.push(method(array[i]))
    }
    return modded
}


function reduce(array, method, start){
    let total = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < array.length; i++) {
      total = method(array[i], total)
    }
  
    return total;
  }