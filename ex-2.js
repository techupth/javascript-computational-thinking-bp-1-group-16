function countVowels(words) {
  // Start coding here
  const matches = words.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2

console.log(countVowels("Hello World"));
console.log(countVowels("TechUp"));
