// function map(arr, func){
//     return arr.map(i => func(i))
// }


// function reduce(arr, func){
//     return arr.reduce((item, start) => func(item, start))

// }

function map(arr, func){
  let result = []
  for (let i = 0; i < arr.length; i++){
   result.push(func(arr[i]))
  }
  return result
}


function reduce(arr, func, start){
  let result = !!start ? start : arr[0]
  let index = !!start ? 0 : 1

  for (index; index < arr.length; index++){
    result = func(arr[index], result)
  }

  return result
}

