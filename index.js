function map(ary, mapFn){
  const newAry = [];
  for (const num of ary){
    newAry.push(mapFn(num));
  }
  return newAry;
}

function reduce(ary, reduceFn, memo){
  for (const element of ary){
    memo = memo === undefined ? element : reduceFn(element, memo)
  }
  return memo
}
