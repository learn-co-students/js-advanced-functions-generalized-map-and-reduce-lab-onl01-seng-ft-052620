// Add your functions here

function map(src, f){
    const newArray = []
    for (let i = 0; i<src.length; i++){
        newArray.push(f(src[i]))
    }
    return newArray
}

function reduce(src, f, start = 0){
    let total
    let index
    if (!!start){
        total = start;
        index = 0
    }
    else{
        total = src[0]
        index = 1
    }

    for (index; index<src.length; index++){
        total = f(src[index], total)
    }

    return total
}


