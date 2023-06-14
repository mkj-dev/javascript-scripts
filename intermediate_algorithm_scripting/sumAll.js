// Return the sum of two numbers in array, plus the sum of all the numbers between them.
// The lowest number will not always come first
function sumAll(arr) {
  const newArr = arr.sort((a,b) => a - b);
  let firstNum = newArr[0];
  let lastNum = newArr[1];
  let sum = 0;
  
  while (firstNum !== lastNum) {
    sum += firstNum
    firstNum += 1;
  }
  return sum + lastNum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));