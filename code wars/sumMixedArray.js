function sumMix(x){
  let numbers=[]
for(let number of x){
 numbers.push(Number(number))
}
return numbers.reduce((a,b)=>{
  return a+b;
});
}
console.log(sumMix([9, 3, '7', '3']))