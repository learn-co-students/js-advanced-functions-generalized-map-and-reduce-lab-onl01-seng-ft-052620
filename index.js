// Add your functions here

function map(arr, action){
    const res = []
    for (let i in arr){
        res[i] = action(arr[i])
    }

    return res
}

function reduce(arr, action,start){
    let res = start

    if (!res){
        res = arr[0]

        for (let i = 1; i < arr.length; i++){
            res  = action(arr[i],res)
        }
    } else {
        for (let i = 0; i < arr.length; i++){
            res  = action(arr[i],res)
        }
    }

    return res
}