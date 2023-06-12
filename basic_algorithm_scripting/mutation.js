// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let strArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase().split("");
    strArr.push(str);
  }

  let str1 = strArr[0].sort();
  let str2 = strArr[1].sort();

  str1 = str1.join("");
  str2 = str2.join("");

  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
