function sortProducts(input){
  let sorted = input.sort((a,b) => {
    return a.price - b.price;
  })
}

const people = [
  { name: "Alice", price: 25 },
  { name: "Bob", price: 20 },
  { name: "Charlie", price: 30 }
];
console.log(sortProducts(people))