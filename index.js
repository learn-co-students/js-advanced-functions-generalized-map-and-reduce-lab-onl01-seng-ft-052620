// Add your functions here
// Your code here
function map(array, fn){
    const output = []
    for (const element of array){
        output.push(fn(element));
    }
    return output;
}

function reduce(array, f, start){
    let output = start;
    if (!output){
        output = array[0];
        for(let i = 1; i < array.length; i++){
            output = f(array[i], output);
        }
    }
    else{
        for(let i = 0; i < array.length; i++){
            output = f(array[i], output);
        }
    }
    return output;
}