// Task
// Sum all the numbers of a given array ( cq. list ), except the highest 
// and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, 
// even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// function sumArray(array) {
//   let max= Math.max(...array)
//   let min= Math.min(...array)
//   let max_number= array.splice(array.indexOf(max),1);
//   let min_numbr= array.splice(array.indexOf(min),1);
//   return array.reduce((a,b)=>a+b);
  
// }
// let array=[6,2,1,8,10];
// console.log(sumArray(array))



/////
function sumArray(array) {
  if(!Array.isArray(array) || array.length <2) return 0
 let sorted= array.sort((a,b)=>a-b);
 let max=sorted.pop();
 let min=sorted.shift();
 return array.reduce((a,b)=> a+b,0);
  
}
let array=[6,2,1,8,10];
console.log(sumArray(array))