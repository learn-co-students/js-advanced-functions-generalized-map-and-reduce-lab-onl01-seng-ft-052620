// Add your functions here
array = [1, 2, 3, -9]
function map(array, someFun) {
    let r = []
  
    for (let i = 0; i < array.length; i++) {
      let theElement = array[i]
      r.push(someFun(theElement))
    }
  
    return r;
  }
  
  function reduce(array, someFun, starting){
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < array.length; i++) {
      r = someFun(array[i], r)
    }
  
    return r;
  }