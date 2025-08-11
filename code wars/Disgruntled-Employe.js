// Create the function off, that receives the nth switch as argument n. The function should return an ascending 
// array containing all of the switch numbers that remain off after Bob completes his revenge.

// Example: (Input --> Output)
// 1 --> [1]
// 2 --> [1]
// 4 --> [1, 4]

function off(n) {
  
  let result=[]
  for(let i=1; i <=n; i++){
    if(Number.isInteger(Math.sqrt(i))){
      result.push(i)
    }
  }
  return result;
}
let output= off(9)
console.log(output);