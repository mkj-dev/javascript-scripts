// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  const strArray = str.split(" ");
  let firstLetter, stringRest, newWord, newStr = "";

  for (let i = 0; i < strArray.length; i++) {
    firstLetter = strArray[i].slice(0,1).toUpperCase();
    stringRest = strArray[i].slice(1,).toLowerCase();

    newWord = firstLetter + stringRest;
    newStr += newWord + " "; 
  }

  return newStr.trim();
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
