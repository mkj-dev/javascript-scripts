// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
function getIndexToIns(arr, num) {
  let lowestIndex, arrNum = 0;
  arr = arr.sort(compareNumbers);

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    arrNum = arr[i];

    if (num === arrNum) {
      lowestIndex = arr.indexOf(arrNum);
      return lowestIndex;
    } else if (num < arrNum) {
      lowestIndex = arr.indexOf(arrNum);
      return lowestIndex;
    }
  }

  if (arrNum < num && !(arrNum > num) && !arr.includes(num)) {
    return arr.length; // last index
  }
}

// function needed for ascending sorting
function compareNumbers(a, b) {
  return a - b;
}

console.log(getIndexToIns([], 1));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
