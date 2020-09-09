// Add your functions here

function map(src, callback) {
  let r = []
  for(let i = 0; i < src.length; i++){
    r.push(callback(src[i]))
  }
  return r;
}

function reduce(src, callback, starting) {
  let r = (!!starting) ? starting : src[0];
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = callback(src[i], r)
  }
  return r;
}