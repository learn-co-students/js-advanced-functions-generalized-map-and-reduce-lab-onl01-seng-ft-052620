// Add your functions here

// my own map-like methods

function map(array, func) {
    let map1 = []

    for (let i = 0; i < array.length; i++) {
        map1.push(func(array[i]))
    }
    return map1
}

// reduce
function reduce(array, func, start){
    let total = !!start ? start : array[0]
    
    let i = !!start ? 0 : 1
  
    for (; i < array.length; i++) {
      total = func(array[i], total)
    }
  
    return total;
  }