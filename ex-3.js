const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

//property มี name กับ price เราโฟกัสที่ price
function getMostExpensiveProduct(products) {
  // Start coding here
  let sortedProducts = products.sort((a,b) => b.price - a.price)
  return sortedProducts[0]
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
console.log(getMostExpensiveProduct(products));
