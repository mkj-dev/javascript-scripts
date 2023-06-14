// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) 
// when an array of real numbers is passed to it.
// Note: Your function should not use any kind of for or while loops or the forEach() function.
const squareList = arr => {
  const squares = [];
  
  const filter = arr.filter(number => {
    if (Number.isInteger(number) && number > 0) {
      squares.push(Math.pow(number, 2));
    }
  });
  return squares;
};

console.log(squareList([-3, 4.8, 5, 3, -3.2])); // [25, 9]
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])); // [16, 1764, 36]
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])); // [9, 100, 49]
