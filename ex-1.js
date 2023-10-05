let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  // Start coding here
  return numbers.map(number => number + amount);
}

addNumber(numbers, 10); // Output: [20, 30, 40]
addNumber(anotherNumbers, 2); // Output: [4, 6, 8]

console.log(addNumber(numbers, 10));
console.log(addNumber(anotherNumbers, 2));

/*ให้เขียน Function ที่ชื่อว่า addNumber 
เพื่อเพิ่มจำนวน Value ที่อยู่ใน Array ทุกตัวตามตัวเลขที่กำหนด

Function addNumber รับ Parameter ทั้งหมด 2 อัน

อันแรกชื่อว่า numbers คือ Array ของ Number
อันสองชื่อว่า amount คือ Number 
ที่ที่จะเอาไปบวกกับ Value แต่ละอันใน Array numbers
Function addNumber 
จะ Return ตัว Value เป็น Array ของตัวเลขที่มีการบวกเพิ่มขึ้นตาม amount
*/