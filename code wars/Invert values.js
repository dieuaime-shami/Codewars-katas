function invert(array) {
let result=[];
  for(let number of array){
    result.push(-number)
  }
  return result;
}
console.log(invert([1, 2, 3, 4, 5]))