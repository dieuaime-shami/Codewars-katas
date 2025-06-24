function oddSquare(input){
  let filted= input.filter(num => num %2 !==0);
  const result= filted.map(num => num * num);
  return result;
}

const number=[10, 15, 20, 25, 30];
console.log(oddSquare(number)); // [1, 3, 5]