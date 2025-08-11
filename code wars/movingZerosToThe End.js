
// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

function moveZeros(arr){
  let zero= arr.filter(zero => zero === 0);
  let noZero= arr.filter(indez => indez !==0)
  return [...noZero,...zero]

}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))