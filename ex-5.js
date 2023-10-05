function getLetterFrequency(words) {
  // Start coding here
  words = words.toLowerCase();
  let result = {};
  for (let i=0; i<words.length; i++) {
    result[words[i]] = (result[words[i]] || 0) + 1  //ทบทีละ 1  เริ่มต้นที่ไม่มี || 0 ป้องกัน result[words[i]] เป็น undefined ตอนที่ยังไม่มี
  }
  return result;
}

const str = "Techupth";

getLetterFrequency(str);

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
