// Return an array consisting of the largest number from each provided sub-array
function largestOfFour(arr) {
    let newArr = []
    let number = null
    arr.forEach(array => {
        number = Math.max(...array)
        newArr.push(number)
    })
    return newArr;
}

// function largestOfFour(arr) {
//   let largestNumArr = [];
//   let largest = null;

//   for (let i = 0; i < arr.length; i++) {
//     largest = Math.max(...arr[i])
//     largestNumArr.push(largest)
//   }
//   return largestNumArr;
// }

const largestNumberArray = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestNumberArray)
