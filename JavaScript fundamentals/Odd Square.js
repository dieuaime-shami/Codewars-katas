/*You are given an array of numbers. Your task is to implement a function called 
oddSquares that filters out the even numbers from the array and then maps 
the remaining numbers to their squares.
*/

function oddSquare(input){
  let filted= input.filter(num => num %2 !==0);
  const result= filted.map(num => num * num);
  return result;
}

const number=[10, 15, 20, 25, 30];
console.log(oddSquare(number));