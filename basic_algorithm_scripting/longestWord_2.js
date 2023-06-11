function findLongestWordLength(str) {
  let stringArr = str.split(" ");
  let longest = stringArr[0].length;
  
  for (let i = 0; i < stringArr.length; i++) {
    if (longest < stringArr[i].length) {
      longest = stringArr[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
