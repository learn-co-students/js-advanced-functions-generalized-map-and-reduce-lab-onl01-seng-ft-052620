function map(arr, func){
    return arr.map(i => func(i))
}



function reduce(arr, func, start){
    return arr.reduce((item, start) => func(item, start))

}

