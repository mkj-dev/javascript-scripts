// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  
  let repeatedString = "";
  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
