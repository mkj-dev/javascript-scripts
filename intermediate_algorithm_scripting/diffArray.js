// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.sort(), arr2.sort();
  
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  newArr.sort();
  
  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === 'undefined') {
      newArr.splice(i, i);
    }
  }
  return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
