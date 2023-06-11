// Remove all falsy values from an array. Return a new array; do not mutate the original array.
function bouncer(arr) {
  const trueArray = [];

  arr.forEach(item => {
    if (item) {
      trueArray.push(item);
    }
  });
  return trueArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
